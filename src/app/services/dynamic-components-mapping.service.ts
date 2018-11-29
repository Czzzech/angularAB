import { Injectable } from '@angular/core';
import {WishlistTitleColumnComponent} from "../components/grid/grid-columns/wishlist/wishlist-title-column/wishlist-title-column.component";
import {DescriptionColumnComponent} from "../components/grid/grid-columns/description-column/description-column.component";

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentsMappingService {

  maps = {
    WishlistTitleColumnComponent : WishlistTitleColumnComponent,
    DescriptionColumnComponent : DescriptionColumnComponent
  };

  constructor() { }

  getClass(string: string){
    return this.maps[string];
  }
}
