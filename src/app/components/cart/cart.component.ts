import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';
import {OrderService} from '../../services/order.service';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  loading = true;
  total = 0;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getCart();
  }
  getCart(): void {
    this.cart = []
    this.total = 0
    this.cartService.getCart().subscribe(
      res => {
        console.log(res);
        for (let i = 0; i < res.cartList.length; i++) {
          this.productService.getProduct(res.cartList[i].product_id).subscribe(
            res1 => {
              console.log(res1)
              this.cart.push({res1, id: res.cartList[i].id})
              this.total += res1.price
            }
          )
        }
        this.loading = false;
      }
    );
  }
  makeOrder(){
    this.orderService.makeOrder(this.total, this.cart.map(product => product.res1.id)).subscribe(
      res => {
        console.log(res);
        alert('Ordered!');
        this.getCart();
      }
    );
  }
  delete(id: any) {
    this.cartService.delete(id).subscribe(res => {
      console.log(res)
      this.getCart()
    })
  }
}
