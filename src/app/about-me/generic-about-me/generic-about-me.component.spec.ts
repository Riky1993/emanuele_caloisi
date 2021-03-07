import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericAboutMeComponent } from './generic-about-me.component';

describe('GenericAboutMeComponent', () => {
  let component: GenericAboutMeComponent;
  let fixture: ComponentFixture<GenericAboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericAboutMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
