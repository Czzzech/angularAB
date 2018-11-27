import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHeaderCellComponent } from './grid-header-cell.component';

describe('GridHeaderCellComponent', () => {
  let component: GridHeaderCellComponent;
  let fixture: ComponentFixture<GridHeaderCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridHeaderCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridHeaderCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
