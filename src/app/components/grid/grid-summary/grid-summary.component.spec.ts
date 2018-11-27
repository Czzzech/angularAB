import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSummaryComponent } from './grid-summary.component';

describe('GridSummaryComponent', () => {
  let component: GridSummaryComponent;
  let fixture: ComponentFixture<GridSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
