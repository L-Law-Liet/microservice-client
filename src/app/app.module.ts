import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/layouts/header/header.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MainComponent} from "./components/main/main.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {CartComponent} from "./components/cart/cart.component";
import {CabinetComponent} from "./components/cabinet/cabinet.component";
import {NewsComponent} from "./components/rating/news.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProductCardComponent,
    CartComponent,
    CabinetComponent,
    NewsComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
