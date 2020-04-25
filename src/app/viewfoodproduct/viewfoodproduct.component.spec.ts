import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfoodproductComponent } from './viewfoodproduct.component';

describe('ViewfoodproductComponent', () => {
  let component: ViewfoodproductComponent;
  let fixture: ComponentFixture<ViewfoodproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfoodproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfoodproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
