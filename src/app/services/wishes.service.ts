import { Injectable } from '@angular/core';
import {Wish} from "../interfaces/Wish";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  public wishes: Wish[];

  constructor(private api: ApiService) {

  }

  getWishes(){
      return this.api.query('get', 'wishes');
  }

}
