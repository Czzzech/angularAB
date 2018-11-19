import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetsPreviewComponent } from './budgets-preview.component';

describe('BudgetsPreviewComponent', () => {
  let component: BudgetsPreviewComponent;
  let fixture: ComponentFixture<BudgetsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
