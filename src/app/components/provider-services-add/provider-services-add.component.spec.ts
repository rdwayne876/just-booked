import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderServicesAddComponent } from './provider-services-add.component';

describe('ProviderServicesAddComponent', () => {
  let component: ProviderServicesAddComponent;
  let fixture: ComponentFixture<ProviderServicesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderServicesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderServicesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
