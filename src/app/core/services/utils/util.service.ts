// Common
import { Injectable } from '@angular/core';

// Crypto
import { AES, enc } from 'crypto-js';

// Environment
import { environment } from 'src/environments/environment.prod';

// Guid
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  /**
   * Method that decrypts the data
   * @param data data to be decrypted
   * @param key decription key
   * @returns decryped data as a string
   */
  decrypt(data: string, key: string = environment.ENCRYPT_KEY): string {
    return AES.decrypt(data, key).toString(enc.Utf8);
  }

  /**
   * Method that encrypts the data
   * @param data data to be ecrypted
   * @param key encription
   * @returns ecryped data as a string
   */
  encrypt(data: string, key: string = environment.ENCRYPT_KEY): string {
    return AES.encrypt(data, key).toString();
  }

  /**
   * Method that generates a guid
   * @returns generated guid as a string
   */
  generateGuid(): string {
    return Guid.create().toString();
  }
}
