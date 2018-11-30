import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-wishlist-panel',
  templateUrl: './wishlist-panel.component.html',
  styleUrls: ['./wishlist-panel.component.css']
})
export class WishlistPanelComponent implements OnInit {

  constructor(public modal: ModalService) { }

  ngOnInit() {

  }
}
