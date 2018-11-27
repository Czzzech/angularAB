import { Component, OnInit } from '@angular/core';
import { Wish } from "../../interfaces/Wish";
import { GridConfig } from "../../interfaces/GridConfig";
import { WishlistTitleColumnComponent } from "../grid/grid-columns/wishlist/wishlist-title-column/wishlist-title-column.component";
import {WishesService} from "../../services/wishes.service";
import {DescriptionColumnComponent} from "../grid/grid-columns/description-column/description-column.component";

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
    columns     : [
          {
            key: 'id',
            header: {
                title: 'ID'
            },
            content: {
                component: ''
            }
          },
          {
            key: 'title',
            header: {
                title: 'Name'
            },
            content: {
                component: WishlistTitleColumnComponent
            }
           },
            {
                key: 'description',
                header: {
                    title: 'Description'
                },
                content: {
                    component: DescriptionColumnComponent
                }
            },
          {
            key: 'price',
            header: {
                title: 'Price'
            },
            content: {
                component: ''
            }
          },
        {
            key: 'order',
            header: {
                title: 'Order'
            },
            content: {
                component: ''
            }
        },
          {
            key: 'completed',
            header: {
                title: 'Completed'
            },
            content: {
                component: ''
            }
          },
          {
            key: 'periodically',
            header: {
                title: 'Periodically'
            },
            content: {
                component: ''
            }
          }
        ],
    pagination  : {},
    filters     : []
  };

  constructor(private wishesService: WishesService) { }

  ngOnInit() {
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
          () => console.log('wishes loaded')
      );
  }

}
