import { Component, OnInit } from '@angular/core';
import { Budget } from "../../interfaces/Budget";
import { Periods } from "../../interfaces/Periods";

@Component({
  selector: 'app-budgets-preview',
  templateUrl: './budgets-preview.component.html',
  styleUrls: ['./budgets-preview.component.css']
})
export class BudgetsPreviewComponent implements OnInit {

  budgets : Budget[] = [];

  constructor() { }

  ngOnInit() {
    this.getBudgets()
  }

  private getBudgets():void{
    this.budgets = [
      {
        id: 1,
        name: 'First',
        description: 'First Description',
        wishes: [
          {
            id: 1,
            name: 'first wish',
            priority: 123,
            price: 222,
            completed: false,
            periodically: 0
          },
          {
            id: 2,
            name: 'second wish',
            priority: 125,
            price: 23366,
            completed: false,
            periodically: 0
          },
          {
            id: 3,
            name: 'Third wish long',
            priority: 125,
            price: 30000,
            completed: false,
            periodically: 0
          }
        ],
        sprints: [],
        period: Periods.monthly,
        start: new Date
      },
      {
        id: 2,
        name: 'Second',
        description: 'Second Description',
        wishes: [],
        sprints: [],
        period: Periods.monthly,
        start: new Date
      },
      {
        id: 3,
        name: 'Third',
        description: 'Third Description',
        wishes: [],
        sprints: [],
        period: Periods.monthly,
        start: new Date
      }
    ];
  }

}
