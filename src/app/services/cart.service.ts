import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseUrlsService as BaseUrl} from './base-urls.service';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  CART_URL = BaseUrl.URL + 'cart';


  constructor(private http: HttpClient,
              private userService: UserService) { }

  getCart(): Observable<any>{
    return this.http.get(this.CART_URL + '/' + localStorage.getItem('id'));
  }

  addToCart(req: any): Observable<any>{
    return this.http.post(this.CART_URL, req);
  }
  delete(id: any): Observable<any>{
    return this.http.delete(this.CART_URL + '/' + id);
  }
}
