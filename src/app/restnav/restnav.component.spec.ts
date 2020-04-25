import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestnavComponent } from './restnav.component';

describe('RestnavComponent', () => {
  let component: RestnavComponent;
  let fixture: ComponentFixture<RestnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
