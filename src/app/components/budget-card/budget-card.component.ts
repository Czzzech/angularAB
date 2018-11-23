import { Component, Input, OnInit } from '@angular/core';
import { Budget } from "../../interfaces/Budget";

@Component({
  selector: 'app-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.css']
})
export class BudgetCardComponent implements OnInit {

  @Input() budget : Budget;

  constructor() { }

  ngOnInit() {
  }

}
