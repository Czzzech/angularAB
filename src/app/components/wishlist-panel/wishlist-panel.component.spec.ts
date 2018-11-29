import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistPanelComponent } from './wishlist-panel.component';

describe('WishlistPanelComponent', () => {
  let component: WishlistPanelComponent;
  let fixture: ComponentFixture<WishlistPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
