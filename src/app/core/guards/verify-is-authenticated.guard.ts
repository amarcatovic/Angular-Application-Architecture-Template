// Common
import { Injectable } from '@angular/core';

// Router
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

// rxjs
import { Observable } from 'rxjs';

// Interfaces
import User from 'src/app/modules/auth/interfaces/User';

// Services
import { StorageService } from '../services/storage/storage.service';

// Constants
import { USER_SAVE_KEY } from '../services/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class VerifyIsAuthenticatedGuard implements CanActivate {
  constructor(
    private _storage: StorageService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const user: User = this._storage.getLocalObject(USER_SAVE_KEY);

    if (user) {
      return true;
    }

    this.router.navigate(['/auth/login']);
    return false;
  }
}
