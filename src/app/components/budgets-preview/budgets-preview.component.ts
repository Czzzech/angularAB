import { Component, OnInit } from '@angular/core';
import { Budget } from "../../interfaces/Budget";
import { Periods } from "../../interfaces/Periods";
import {BudgetsService} from "../../services/budgets.service";
import {WishesService} from "../../services/wishes.service";

@Component({
  selector: 'app-budgets-preview',
  templateUrl: './budgets-preview.component.html',
  styleUrls: ['./budgets-preview.component.css']
})
export class BudgetsPreviewComponent implements OnInit {

  budgets : Budget[] = [];

  constructor(
      private budgetService: BudgetsService,
      private wishesService: WishesService
  ) { }

  ngOnInit() {
      if (this.budgets.length == 0) {
          this.budgetService.getBudgets().subscribe(
              budgets => {
                  let wishes = this.wishesService.getWishes().subscribe(wishes => {
                          budgets.forEach(budget => {
                              budget.wishes = [];
                              for (let i = 0; i < wishes.length; i++) {
                                  if (wishes[i].budget == budget.id)
                                      budget.wishes.push(wishes[i]);
                              }
                              this.budgets.push(budget);
                          });
                      },
                      err => console.error(err),
                      () => console.log('wishes loaded')
                  );
              },
              err => console.error(err),
              () => console.log('budgets loaded')
          );
      }
  }

}
