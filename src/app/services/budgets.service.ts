import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Budget} from "../interfaces/Budget";

@Injectable({
  providedIn: 'root'
})
export class BudgetsService {

  budgets: Budget[];

  constructor(private api: ApiService) { }

  getBudgets(){
    return this.api.query('get', 'budgets');
  }


}
