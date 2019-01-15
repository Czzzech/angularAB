import { Component, OnInit } from '@angular/core';
import { Wish } from "../../interfaces/Wish";
import {WishesService} from "../../services/wishes.service";
import {ModelConfig} from "../../interfaces/ModelConfig";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  public wishes: Wish[] = [];
  public config: ModelConfig = {
      grid: {
            model       : 'wishlist',
            component   : 'WishListComponent',
            title       : 'Wish List',
            columns     : [],
            pagination  : {},
            filters     : []
      },
      modal: {
          header: {},
          content: {},
          footer: {}
      }
  };

  constructor(private wishesService: WishesService) { }

  ngOnInit() {
      this.wishesService.getConfig().subscribe(config => {
          this.config = JSON.parse(config);
          console.log(this.config);
          this.wishesService.getWishes().subscribe(wishes => {
              this.wishes = wishes.query;
          },
          err => console.error(err),
          () => console.log('wishes loaded'));
      },
      err => console.error(err),
      () => console.log('wishes Config loaded'));
  }

}
