import { Injectable } from '@angular/core';
import {BaseUrlsService as BaseUrl} from './base-urls.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  PRODUCT_URL = BaseUrl.URL + 'products';
  RATINGS_URL = BaseUrl.URL + 'catalog';

  constructor(private http: HttpClient) { }

  getProduct(id: any): Observable<any>{
    return this.http.get(this.PRODUCT_URL + '/' + id);
  }
  getProducts(): Observable<any>{
    return this.http.get(this.PRODUCT_URL);
  }
  removeProduct(id: number): Observable<any>{
    return this.http.delete(this.PRODUCT_URL + '/' + id);
  }
  addProduct(fd: FormData): Observable<any>{
    console.log('--', fd);
    return this.http.post(this.PRODUCT_URL, fd);
  }
  getRatings(): Observable<any>{
    return this.http.get(this.RATINGS_URL)
  }
}
