import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { HttpMethod } from 'src/app/core/services/utils/constants';
import { User } from '../../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpService
  ) { }

  getUsersAsync(): Observable<User[]> {
    return this.http.apiCall('users', HttpMethod.GET);
  }
}
