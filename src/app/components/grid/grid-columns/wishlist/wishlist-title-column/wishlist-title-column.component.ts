import {Component, Input, OnInit} from '@angular/core';
import {GridBaseColumnComponent} from "../../grid-base-column/grid-base-column.component";

@Component({
  selector: '[app-wishlist-title-column]',
  templateUrl: './wishlist-title-column.component.html',
  styleUrls: ['./wishlist-title-column.component.css']
})
export class WishlistTitleColumnComponent extends GridBaseColumnComponent implements OnInit {

  @Input() value: any;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
