import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wishlist-panel',
  templateUrl: './wishlist-panel.component.html',
  styleUrls: ['./wishlist-panel.component.css']
})
export class WishlistPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * Просит открыть модальную форму
   */
  form(){
    $('#wishForm').modal('toggle')
  }

}
