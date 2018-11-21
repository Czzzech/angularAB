import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  static DANGER = 'danger';
  static WARNING = 'warning';
  static INFO = 'info';
  static SUCCESS = 'success';

  static error(error){
    console.log(error);
  }

  constructor() { }
}
