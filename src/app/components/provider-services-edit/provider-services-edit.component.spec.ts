import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderServicesEditComponent } from './provider-services-edit.component';

describe('ProviderServicesEditComponent', () => {
  let component: ProviderServicesEditComponent;
  let fixture: ComponentFixture<ProviderServicesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderServicesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderServicesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
