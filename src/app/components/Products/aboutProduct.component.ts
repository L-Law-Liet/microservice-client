import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './aboutProduct.component.html',
  styleUrls: ['./aboutProduct.component.css']
})
export class MainComponent implements OnInit {
  products = [];

  constructor(
    private service: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.service.getProducts().subscribe(res => {
      this.products = res;
    });
  }


}
