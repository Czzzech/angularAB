import {Component, OnInit, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  emailGroup: FormGroup;
  email: FormControl;
  @Input('form') parentGroup : FormGroup;
  constructor() { }

  ngOnInit() {
    this.email = new FormControl(
        "", [
          Validators.required,
          Validators.pattern('^[a-zA-z0-9._~!@#$%^&*()\+]+@[a-zA-z0-9._~!@#$%^&*()\+]{1,10}\.[a-zA-z0-9]{2,10}$')
        ]
    );
    this.emailGroup = new FormGroup({
      email: this.email
    });
    this.parentGroup.addControl('emailGroup', this.emailGroup);
  }

  hasErrors(){
    return this.email.errors && (this.email.dirty || this.email.touched);
  }

  valid(key?: string){
    switch (key){
      case 'pattern':
        return !this.email.errors.pattern;
      case 'required':
        return !this.email.errors.required;
      default:
        return !this.email.invalid;
    }
  }

}
