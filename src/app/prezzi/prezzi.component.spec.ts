import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrezziComponent } from './prezzi.component';

describe('PrezziComponent', () => {
  let component: PrezziComponent;
  let fixture: ComponentFixture<PrezziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrezziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrezziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
