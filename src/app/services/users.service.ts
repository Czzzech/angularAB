import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private api: ApiService) { }

  get(id?){
    if(id)
      this.api.query('get', 'users/' + id);
    else this.api.query('get', 'users');
  }
}
