import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products: Product[];
  constructor() { }

  ngOnInit(): void {
    this.products = [];
    this.products.push(<Product>{
      Description: "Simply delicious 12 pack of Cinnabons",
      Discount: 10,
      Price: 120,
      Name: "RusticBons",
      image: ''
    });
    this.products.push(<Product>{
      Description: "Traditional style cookies",
      Discount: 12,
      Price: 70,
      Name: "Crunchy Cookies",
      image: ''
    });
    this.products.push(<Product>{
      Description: "Yummy American style cookies",
      Discount: 10,
      Price: 50,
      Name: "Chewy Cookies",
      image: ''
    });
  }

}
