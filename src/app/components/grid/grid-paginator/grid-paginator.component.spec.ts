import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPaginatorComponent } from './grid-paginator.component';

describe('GridPaginatorComponent', () => {
  let component: GridPaginatorComponent;
  let fixture: ComponentFixture<GridPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
