import { Injectable } from '@angular/core';
import {BaseUrlsService as BaseUrl} from './base-urls.service';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  ORDER_URL = BaseUrl.URL + 'orders';

  constructor(private http: HttpClient,
              private userService: UserService) { }

  makeOrder(total: number, cart: any[]): Observable<any>{
    return this.http.post(this.ORDER_URL, {total, product_ids: cart, user_id: localStorage.getItem('id')});
  }

  getOrderItems(): Observable<any>{
    return this.http.get(this.ORDER_URL + this.userService.user.id + '/order');
  }
}
