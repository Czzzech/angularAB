import { Injectable } from '@angular/core';
import {WishlistTitleColumnComponent} from "../components/grid/grid-columns/wishlist/wishlist-title-column/wishlist-title-column.component";
import {DescriptionColumnComponent} from "../components/grid/grid-columns/description-column/description-column.component";
import {TextFieldComponent} from "../components/fields/text-field/text-field.component";
import {DateFieldComponent} from "../components/fields/date-field/date-field.component";
import {TextAreaComponent} from "../components/fields/text-area/text-area.component";

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentsMappingService {

  maps = {
    WishlistTitleColumnComponent : WishlistTitleColumnComponent,
    DescriptionColumnComponent : DescriptionColumnComponent,
    TextFieldComponent : TextFieldComponent,
    DateFieldComponent : DateFieldComponent,
    TextAreaComponent : TextAreaComponent
  };

  constructor() { }

  getClass(string: string){
    return this.maps[string];
  }
}
