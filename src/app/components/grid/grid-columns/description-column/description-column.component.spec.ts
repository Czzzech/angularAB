import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionColumnComponent } from './description-column.component';

describe('DescriptionColumnComponent', () => {
  let component: DescriptionColumnComponent;
  let fixture: ComponentFixture<DescriptionColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
