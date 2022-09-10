import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSearchResultsComponent } from './web-search-results.component';

describe('WebSearchResultsComponent', () => {
  let component: WebSearchResultsComponent;
  let fixture: ComponentFixture<WebSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebSearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
