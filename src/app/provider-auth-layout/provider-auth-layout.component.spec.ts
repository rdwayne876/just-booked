import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderAuthLayoutComponent } from './provider-auth-layout.component';

describe('ProviderAuthLayoutComponent', () => {
  let component: ProviderAuthLayoutComponent;
  let fixture: ComponentFixture<ProviderAuthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderAuthLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderAuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
