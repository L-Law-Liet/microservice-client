import { Injectable } from '@angular/core';
import {BaseUrlsService as BaseUrl} from './base-urls.service';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {LogService} from './log.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  LOGIN_URL = BaseUrl.URL + 'auth';
  USER_URL = BaseUrl.URL + 'auth/user';
  PROFILE_URL = BaseUrl.URL + 'profile';

  // @ts-ignore
  user: User;

  constructor(private http: HttpClient,
              private router: Router,
              private logger: LogService) { }

  login(user: any): Observable<any>{
    return this.http.post(this.LOGIN_URL, user, {observe: 'response'});
  }
  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    // @ts-ignore
    this.user = null;
    this.router.navigate(['/']);
  }
  isAuth(): boolean{
    return !!localStorage.getItem('token');
  }
  getUserIdByToken(): Observable<any> {
    return this.http.get(this.USER_URL);
  }
  getProfile(id: any): Observable<any> {
    return this.http.get(this.PROFILE_URL + '/' + id);
  }
}
