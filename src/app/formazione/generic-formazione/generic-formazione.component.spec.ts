import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormazioneComponent } from './generic-formazione.component';

describe('GenericFormazioneComponent', () => {
  let component: GenericFormazioneComponent;
  let fixture: ComponentFixture<GenericFormazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericFormazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFormazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
