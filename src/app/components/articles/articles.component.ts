import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  news: any[] = [];
  ready = false
  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll() {
    this.service.getAll().subscribe(res => {
      console.log(res.newsList)
      this.news = res.newsList
      this.ready = true
    })
  }
}
