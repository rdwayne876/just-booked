import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderAppointmentsDialogComponent } from './provider-appointments-dialog.component';

describe('ProviderAppointmentsDialogComponent', () => {
  let component: ProviderAppointmentsDialogComponent;
  let fixture: ComponentFixture<ProviderAppointmentsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderAppointmentsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderAppointmentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
