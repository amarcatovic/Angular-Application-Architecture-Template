// Common
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

// environment
import { environment } from './../../../../environments/environment.prod';

// Toastr
import { ToastrService } from 'ngx-toastr';

// rxjs
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

// Constants
import { HttpMethod } from './../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient,
    private toastr: ToastrService) { }

  /**
   * This method makes calls to the server. It also catches errors and displays error messages.
   * @param endpoint - endpoint url
   * @param httpMethod - http method for api call
   * @param data - object to be passed to the server
   * @returns Observable response
   */
  apiCall(endpoint: string, httpMethod: HttpMethod, data?: any): Observable<any> {
    let response: any;

    switch (httpMethod) {
      case HttpMethod.GET: 
        response = this.http.get(`${environment.API_URL}${endpoint}`)
          .pipe(catchError(error => this.handleError(error)));
        break;
      case HttpMethod.POST: 
        response = this.http.post(`${environment.API_URL}${endpoint}`, data)
          .pipe(catchError(error => this.handleError(error)));
        break;
      case HttpMethod.PUT: 
        response = this.http.put(`${environment.API_URL}${endpoint}`, data)
          .pipe(catchError(error => this.handleError(error)));
        break;
      case HttpMethod.PATCH: 
        response = this.http.patch(`${environment.API_URL}${endpoint}`, data)
          .pipe(catchError(error => this.handleError(error)));
        break;
      case HttpMethod.DELETE: 
        response = this.http.delete(`${environment.API_URL}${endpoint}`)
          .pipe(catchError(error => this.handleError(error)));
        break;
      default:
        break;
    }

    return response;
  }

  /**
   * This method handles errors by displaying toastr popup
   * @param error - HttpErrorResponse object
   */
  handleError(error: HttpErrorResponse): any {
      this.toastr.error(error.error.message);
  }
}
