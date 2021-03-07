import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericMetodoComponent } from './generic-metodo.component';

describe('GenericMetodoComponent', () => {
  let component: GenericMetodoComponent;
  let fixture: ComponentFixture<GenericMetodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericMetodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericMetodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
