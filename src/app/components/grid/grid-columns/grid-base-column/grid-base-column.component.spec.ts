import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBaseColumnComponent } from './grid-base-column.component';

describe('GridBaseColumnComponent', () => {
  let component: GridBaseColumnComponent;
  let fixture: ComponentFixture<GridBaseColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridBaseColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridBaseColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
