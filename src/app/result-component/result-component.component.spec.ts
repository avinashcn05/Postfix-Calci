import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponentComponent } from './result-component.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

describe('ResultComponentComponent', () => {
  let component: ResultComponentComponent;
  let fixture: ComponentFixture<ResultComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultComponentComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the result component', () => {
    expect(component).toBeTruthy();
  });

  it('should able to show the result', () => {
     expect(component.result).toBeDefined();
  });
});
