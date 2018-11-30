import { Component, OnInit } from '@angular/core';
import { Wish } from "../../interfaces/Wish";
import { GridConfig } from "../../interfaces/GridConfig";
import {WishesService} from "../../services/wishes.service";
import {GridColumn} from "../../interfaces/GridColumn";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishes: Wish[] = [];
  gridConfig: GridConfig = {
    component   : 'wishlist',
    title       : 'Wish List',
    columns     : [],
    pagination  : {},
    filters     : []
  };
  gridColumns : GridColumn[] = [];

  constructor(private wishesService: WishesService) { }

  ngOnInit() {
      this.wishesService.getColumnsConfig().subscribe(config => {
          this.gridConfig.columns = config;
          config.forEach(fieldConfig => {
              if(fieldConfig.show)
                  this.gridColumns.push(fieldConfig);
          });
          this.wishesService.getWishes().subscribe(wishes => {
              wishes.forEach(wish => {
                  this.wishes.push({
                      id : parseFloat(wish.id),
                      title : wish.title,
                      description : wish.description,
                      price : wish.price,
                      order : wish.order,
                      completed : (new Date(wish.completed)).toDateString(),
                      periodically : wish.periodically
                  });
              });
          },
          err => console.error(err),
          () => console.log('wishes loaded'));
      },
      err => console.error(err),
      () => console.log('wishes Config loaded'));
  }

}
