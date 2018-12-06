import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PostFixCalculatorComponent } from './post-fix-calculator.component';
import { ResultComponentComponent } from '../result-component/result-component.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PostFixCalculatorComponent', () => {
  let component: PostFixCalculatorComponent;
  let fixture: ComponentFixture<PostFixCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFixCalculatorComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFixCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the post fix calculator component', () => {
    expect(component).toBeTruthy();
    
  });

  it('should be to initialize and evalulate the post fix expression', () => {
    expect(component.checkValidExpression).toBeDefined();
    component.expression = "1 2 +";
    component.getExpression();
    expect(component.result.toString()).toBe("3");
    
  });

  it('should be able to check for valid expression', () => {
    expect(component.checkValidExpression).toBeDefined();
   
    component.expression = "1 2 +";
    let result = component.checkValidExpression("1 2 +");
    expect(result).toBe("1 2 +");
    
  });

  it('should be able to perform calculation and able to evaluate the expression', () => {
    expect(component.checkValidExpression).toBeDefined();
   
    component.expression = "1 2 +";
    let tokens = component.expression.split(/\s+/);
    let stack = [];
    let first;
    let second;
    let result = component.performCalculation(tokens, stack, first, second);
    expect(result.pop().toString()).toBe("3");
    
  });
  
});
 