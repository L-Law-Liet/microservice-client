import { Injectable } from '@angular/core';
import {BaseUrlsService as BaseUrl} from "./base-urls.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  NEWS_URL = BaseUrl.URL + 'news';

  constructor(private http: HttpClient,
              private router: Router) { }

  getAll(): Observable<any>{
    return this.http.get(this.NEWS_URL);
  }
}
