import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlsService {
  public static URL = 'http://localhost:8762/';
  constructor() { }
}
