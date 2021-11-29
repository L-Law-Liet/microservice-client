import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {
  news: any[] = [];
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getRatings();
  }

  getRatings(): void {
    this.service.getRatings().subscribe( res => {
      console.log(res);
      this.news = res[0];
    });
  }
}
