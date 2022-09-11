import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebProviderPageComponent } from './web-provider-page.component';

describe('WebProviderPageComponent', () => {
  let component: WebProviderPageComponent;
  let fixture: ComponentFixture<WebProviderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebProviderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebProviderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
