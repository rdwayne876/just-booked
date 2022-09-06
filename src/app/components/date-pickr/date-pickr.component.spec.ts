import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickrComponent } from './date-pickr.component';

describe('DatePickrComponent', () => {
  let component: DatePickrComponent;
  let fixture: ComponentFixture<DatePickrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePickrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
