import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {CabinetComponent} from "./components/cabinet/cabinet.component";
import {CartComponent} from "./components/cart/cart.component";
import {NewsComponent} from "./components/rating/news.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {ArticleComponent} from "./components/article/article.component";
import {ArticlesComponent} from "./components/articles/articles.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cabinet',
    component: CabinetComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'ratings',
    component: NewsComponent
  },
  {
    path: 'news',
    component: ArticlesComponent
  },
  {
    path: 'news/:id',
    component: ArticleComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
