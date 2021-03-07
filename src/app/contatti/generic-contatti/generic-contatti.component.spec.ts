import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericContattiComponent } from './generic-contatti.component';

describe('GenericContattiComponent', () => {
  let component: GenericContattiComponent;
  let fixture: ComponentFixture<GenericContattiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericContattiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericContattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
