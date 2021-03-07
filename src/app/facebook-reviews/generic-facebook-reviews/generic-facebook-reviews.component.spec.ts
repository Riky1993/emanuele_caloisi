import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFacebookReviewsComponent } from './generic-facebook-reviews.component';

describe('GenericFacebookReviewsComponent', () => {
  let component: GenericFacebookReviewsComponent;
  let fixture: ComponentFixture<GenericFacebookReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericFacebookReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFacebookReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
