import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebBannerComponent } from './web-banner.component';

describe('WebBannerComponent', () => {
  let component: WebBannerComponent;
  let fixture: ComponentFixture<WebBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
