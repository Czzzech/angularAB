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
        wishes: [],
        sprints: [],
        period: 2,
        start: new Date
      },
      {
        id: 2,
        name: 'Second',
        description: 'Second Description',
        wishes: [],
        sprints: [],
        period: 2,
        start: new Date
      },
      {
        id: 3,
        name: 'Third',
        description: 'Third Description',
        wishes: [],
        sprints: [],
        period: 2,
        start: new Date
      }
    ];
  }

}
