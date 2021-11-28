// Common
import { HttpInterceptor, HttpEvent, HttpErrorResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

// rxjs
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, retry } from 'rxjs/operators';

// Services
import { StorageService } from './../storage/storage.service';

// Constants
import { TokenSaveLocation } from '../utils/constants';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(
    private _storage: StorageService
  ) {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._storage.getAccessToken(TokenSaveLocation.COOKIE);

    if (token) {
      httpRequest = httpRequest.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });
    }

    return next.handle(httpRequest)
      .pipe(
        retry(2),

        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        }),

        finalize(() => {
          const profilingMsg = `${httpRequest.method} "${httpRequest.urlWithParams}"`;
        })
        );
  }
}
