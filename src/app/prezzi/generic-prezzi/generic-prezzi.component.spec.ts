import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericPrezziComponent } from './generic-prezzi.component';

describe('GenericPrezziComponent', () => {
  let component: GenericPrezziComponent;
  let fixture: ComponentFixture<GenericPrezziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericPrezziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericPrezziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
