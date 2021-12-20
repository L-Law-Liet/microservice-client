import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/layouts/header/header.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MainComponent} from "./components/main/main.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {CartComponent} from "./components/cart/cart.component";
import {CabinetComponent} from "./components/cabinet/cabinet.component";
import {NewsComponent} from "./components/rating/news.component";
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {FeedbackComponent} from "./components/feedback/feedback.component";
import { ArticleComponent } from './components/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProductDetailsComponent,
    FeedbackComponent,
    ProductCardComponent,
    CartComponent,
    CabinetComponent,
    NewsComponent,
    LoginComponent,
    ArticleComponent,
    ArticlesComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
