import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMyCarsComponent } from './list-my-cars.component';

describe('ListMyCarsComponent', () => {
  let component: ListMyCarsComponent;
  let fixture: ComponentFixture<ListMyCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMyCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMyCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
