import { Component, OnInit } from '@angular/core';
import { Wish } from "../../interfaces/Wish";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishes: Wish[] = [];

  constructor() { }

  ngOnInit() {
    this.wishes = [
      {
        id:1,
        title: 'myWish',
        price: 500
      },
      {
        id:2,
        title: 'myWish',
        price: 600
      },
      {
        id:3,
        title: 'myWish',
        price: 700
      },
      {
        id:4,
        title: 'myWish',
        price: 1500
      }
    ];
  }

}
