import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookReviewsComponent } from './facebook-reviews.component';

describe('FacebookReviewsComponent', () => {
  let component: FacebookReviewsComponent;
  let fixture: ComponentFixture<FacebookReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
