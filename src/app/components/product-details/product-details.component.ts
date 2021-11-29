import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {CartService} from '../../services/cart.service';
import {UserService} from '../../services/user.service';
import {audit} from 'rxjs/operators';
import {FavouriteService} from '../../services/favourite.service';
import {FeedbackService} from '../../services/feedback.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {
  id: string | undefined;
  cart: any;
  product: any;
  count = 1;
  loading = true;
  canComment = false;
  feedbacks: any[] = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private service: ProductService,
    private cartService: CartService,
    private favouriteService: FavouriteService,
    private feedbackService: FeedbackService,
    public auth: UserService,
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.getProduct();
  }

  getProduct(): void{
    // @ts-ignore
    this.service.getProduct(this.id).subscribe(res => {
      this.product = res;
      // this.getFeedbacks(this.product.id);
      if (this.auth.user){
        this.hasAccess();
      }
      this.loading = false
      console.log(res);
    });
  }

  addToCart(){
    let req = {
      product_id: this.product.id,
      user_id: localStorage.getItem('id')
    };

    this.cartService.addToCart(req).subscribe(
      res => {
        console.log(res)
        alert('Added')
      },
      error => {
        console.log(error);
      }
    );
  }
  parseInt(val: any): number{
    return Number(val);
  }

  getFeedbacks(id: number): void{
    this.feedbackService.getFeedbacks(id).subscribe(
      res => {
        console.log(res);
        this.feedbacks = res;
        this.loading = false;
      },
      error => {
        console.log(error);
      }
    );
  }
  hasAccess(): void{
    this.feedbackService.hasAccess(this.auth.user.id, this.product.id).subscribe(
      res => {
        console.log(res);
        this.canComment = res;
        console.log(this.canComment);
      }
    );
  }
  updateFeedback(){
    this.getFeedbacks(this.product.id);
    this.hasAccess();
  }
}
