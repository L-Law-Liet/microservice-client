import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

  // @ts-ignore
  @Input() product: any;
  constructor( ) { }

  ngOnInit(): void {
  }
  parseInt(val: any): number{
    return Number(val);
  }
}
