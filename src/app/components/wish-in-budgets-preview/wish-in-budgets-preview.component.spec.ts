import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishInBudgetsPreviewComponent } from './wish-in-budgets-preview.component';

describe('WishInBudgetsPreviewComponent', () => {
  let component: WishInBudgetsPreviewComponent;
  let fixture: ComponentFixture<WishInBudgetsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishInBudgetsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishInBudgetsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
