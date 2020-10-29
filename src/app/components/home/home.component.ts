import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models';
import productJson from '../../../assets/json/products.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products: Product[];
  public shownProduct = -1;
  constructor() { }

  ngOnInit(): void {
    this.products = productJson;
  }
  showProduct(index: number) {
    this.shownProduct = index;
  }
  
}
