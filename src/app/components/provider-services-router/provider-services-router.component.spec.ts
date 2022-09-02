import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderServicesRouterComponent } from './provider-services-router.component';

describe('ProviderServicesRouterComponent', () => {
  let component: ProviderServicesRouterComponent;
  let fixture: ComponentFixture<ProviderServicesRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderServicesRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderServicesRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
