import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldPrependComponent } from './field-prepend.component';

describe('FieldPrependComponent', () => {
  let component: FieldPrependComponent;
  let fixture: ComponentFixture<FieldPrependComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldPrependComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldPrependComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
