// Common
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { UtilService } from './../utils/util.service';
import { CookieService } from 'ngx-cookie-service';

// Constants
import { Tokens, TokenSaveLocation } from './../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private _cookies: CookieService,
    private _util: UtilService,
    private _router: Router
  ) { }

  /**
   * Sets the access token in cookie or local storage
   * @param token token value
   */
  saveAccessToken(token: string, location: TokenSaveLocation = TokenSaveLocation.LOCAL): void {
    const encryptedToken = this._util.encrypt(token);
    
    if (location === TokenSaveLocation.LOCAL) {
      localStorage.setItem(Tokens.ACCESS, encryptedToken);
    } else {
      this._cookies.set(Tokens.ACCESS, encryptedToken);
    }
  }

  /**
   * Sets the refresh token in cookie or local storage
   * @param token 
   * @param location 
   */
  saveRefreshToken(token: string, location: TokenSaveLocation = TokenSaveLocation.LOCAL): void {
    const encryptedToken = this._util.encrypt(token);

    if (location === TokenSaveLocation.LOCAL) {
      localStorage.setItem(Tokens.REFRESH, encryptedToken);
    } else {
      this._cookies.set(Tokens.REFRESH, encryptedToken);
    }
  }

  /**
   * Gets the access token from cookie or local storage
   * @returns decrypted access token
   */
  getAccessToken(location: TokenSaveLocation = TokenSaveLocation.LOCAL): string {
    let token: string = '';

    if (location === TokenSaveLocation.LOCAL) {
      token = localStorage.getItem(Tokens.ACCESS) || '';
    } else {
      this._cookies.get(Tokens.ACCESS);
    }

    return this._util.decrypt(token);
  }

  /**
   * Gets the refresh token from cookie or local storage
   * @returns decrypted access token
   */
  getRefreshToken(location: TokenSaveLocation = TokenSaveLocation.LOCAL): string {
    let token: string = '';

    if (location === TokenSaveLocation.LOCAL) {
      token = localStorage.getItem(Tokens.REFRESH) || '';
    } else {
      this._cookies.get(Tokens.ACCESS);
    }

    return this._util.decrypt(token);
  }

  /**
   * Saves encrypted object to local storage
   * @param key - key under which data will be saved
   * @param value - value to be encrypted and saved
   */
  saveLocalObject(key: string, value: any): void {
    localStorage.setItem(key, this._util.encrypt(JSON.stringify(value)));
  }

  /**
   * Saves encrypted value to local storage
   * @param key - key under which data will be saved
   * @param value - value to be encrypted and saved
   */
   saveLocalValue(key: string, value: any): void {
    localStorage.setItem(key, this._util.encrypt(value));
  }

  /**
   * Saves encrypted object to cookie
   * @param key - key under which data will be saved
   * @param value - value to be encrypted and saved
   */
   saveCookieObject(key: string, value: any): void {
    this._cookies.set(key, this._util.encrypt(JSON.stringify(value)));
  }

  /**
   * Gets decrypted object from local storage
   * @param key - key under which data was saved
   * @returns decrypted data from local storage
   */
  getLocalObject(key: string): any {
    const item = localStorage.getItem(key);

    if (!item) {
      return null;
    }

    return JSON.parse(this._util.decrypt(item));
  }

  /**
   * Gets decrypted value from local storage
   * @param key - key under which data was saved
   * @returns decrypted data from local storage
   */
   getLocalValue(key: string): any {
    const item = localStorage.getItem(key);

    if (!item) {
      return null;
    }

    return item;
  }

  /**
   * Gets decrypted object from cookie
   * @param key - key under which data was saved
   * @returns decrypted data from cookie
   */
     getCookieObject(key: string): any {
      return JSON.parse(this._util.decrypt(this._cookies.get(key)));
    }

  /**
   * Deletes object from local storage
   * @param key - key under which data was saved
   */
     deleteLocalItem(key: string): void {
      localStorage.removeItem(key);
    }

    /**
   * Deletes object from local storage
   * @param key - key under which data was saved
   */
     deleteCookieItem(key: string): void {
      this._cookies.delete(key);
    }
}
