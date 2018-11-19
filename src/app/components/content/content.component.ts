import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  users = [];
  constructor() { }

  ngOnInit() {
    this.users = [
      {name: 'Name 1'},
      {name: 'Name 2'},
      {name: 'Name 3'},
      {name: 'Name 4'},
      {name: 'Name 5'}
    ];
  }

}
