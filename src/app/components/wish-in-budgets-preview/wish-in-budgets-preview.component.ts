import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Wish} from "../../interfaces/Wish";

@Component({
  selector: 'app-wish-in-budgets-preview',
  templateUrl: './wish-in-budgets-preview.component.html',
  styleUrls: ['./wish-in-budgets-preview.component.css']
})
export class WishInBudgetsPreviewComponent implements OnInit {

  @Input() wish: Wish;
  @Input() index: number;

  @Output('complete') completeEmitter : EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  complete(){
    this.completeEmitter.emit(this.index);
  }

}
