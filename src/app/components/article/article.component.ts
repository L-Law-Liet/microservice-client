import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  id: string | undefined;
  article: any;
  loading = true;

  constructor(
    private activeRoute: ActivatedRoute,
    private service: NewsService
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.getArticle();
  }

  getArticle(): void{
    // @ts-ignore
    this.service.get(this.id).subscribe(res => {
      this.article = res;
      this.loading = false
      console.log(res);
    });
  }

}
