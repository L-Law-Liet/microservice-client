import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {
  news = [];
  // @ts-ignore
  paginator: Paginator;
  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.getNewsPageable();
  }

  getRatings(): void {
    this.service.getRatings().subscribe( res => {
      console.log(res);
      this.news = res.data;
    });
  }
}
