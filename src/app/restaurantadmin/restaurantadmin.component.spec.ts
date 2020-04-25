import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantadminComponent } from './restaurantadmin.component';

describe('RestaurantadminComponent', () => {
  let component: RestaurantadminComponent;
  let fixture: ComponentFixture<RestaurantadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
