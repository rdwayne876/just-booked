import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderReviewsComponent } from './provider-reviews.component';

describe('ProviderReviewsComponent', () => {
  let component: ProviderReviewsComponent;
  let fixture: ComponentFixture<ProviderReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
