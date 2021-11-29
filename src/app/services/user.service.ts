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
  LOGIN_URL = BaseUrl.URL + 'login';

  // @ts-ignore
  user: User;

  constructor(private http: HttpClient,
              private router: Router,
              private logger: LogService) { }

  login(user: any): Observable<{token: string}>{
    return this.http.post<{token: string}>(this.LOGIN_URL, user).pipe(
      tap(
        ({token}) => {
          console.log('serv', token);
          localStorage.setItem('token', token);
        },
        error => {
          this.logger.log(error);
        }
      )
    );
  }
  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // @ts-ignore
    this.user = null;
    this.router.navigate(['/']);
  }
  isAuth(): boolean{
    return !!localStorage.getItem('user');
  }
}
