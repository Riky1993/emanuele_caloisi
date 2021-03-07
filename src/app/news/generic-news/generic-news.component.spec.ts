import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericNewsComponent } from './generic-news.component';

describe('GenericNewsComponent', () => {
  let component: GenericNewsComponent;
  let fixture: ComponentFixture<GenericNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
