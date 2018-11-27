import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistTitleColumnComponent } from './wishlist-title-column.component';

describe('WishlistTitleColumnComponent', () => {
  let component: WishlistTitleColumnComponent;
  let fixture: ComponentFixture<WishlistTitleColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistTitleColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistTitleColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
