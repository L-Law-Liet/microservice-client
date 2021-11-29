import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';
import {OrderService} from '../../services/order.service';

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
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getCart();
  }
  getCart(): void {
    this.cartService.getCart().subscribe(
      res => {
        console.log(res);
        this.cart = res;
        this.loading = false;
      }
    );
  }
  remove(id: number): void{
    this.cartService.removeFromCart(id).subscribe(
      res => {
        this.getCart();
      }
    )
  }
  // makeOrder(){
  //   this.orderService.makeOrder(this.total, this.cart).subscribe(
  //     res => {
  //       console.log(res);
  //       alert('Ordered!');
  //       this.getCart();
  //     }
  //   );
  // }
}
