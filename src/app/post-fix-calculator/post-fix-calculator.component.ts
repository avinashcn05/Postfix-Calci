import { Component, OnInit } from '@angular/core';
import { MessageService } from '../shared/services/message-service';

@Component({
  selector: 'app-post-fix-calculator',
  templateUrl: './post-fix-calculator.component.html',
  styleUrls: ['./post-fix-calculator.component.css'],
})
export class PostFixCalculatorComponent implements OnInit {

  expression: any;
  result: any;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  getExpression() {

    let expression = this.expression;

    expression = this.checkValidExpression(expression);

    let result;
    let tokens = expression.split(/\s+/);
    let stack = [];
    let first;
    let second;
    let containsInvalidChars = /[^()+\-*/0-9.\s]/gi.test(expression);

    if (containsInvalidChars) {
      return null;
    }

    this.performCalculation(tokens, stack, first, second);

    result = stack.pop();

    this.result = result;
    this.messageService.sendMessage(result);
  }

  checkValidExpression(expression) {
    if (typeof expression !== 'string') {
      if (expression instanceof String) {
        expression = expression.toString();

      } else {
        return null;
      }
    }
    return this.expression;
  }

  performCalculation(tokens, stack, first, second) {
    for (let i = 0; i < tokens.length; i++) {
      let token = tokens[i];

      if (token === '*') {
        second = stack.pop();
        first = stack.pop();

        if (typeof first === 'undefined') {
          first = 1;
        }

        if (typeof second === 'undefined') {
          second = 1;
        }

        stack.push(first * second);
      } else if (token === '/') {
        second = stack.pop();
        first = stack.pop();
        stack.push(first / second);
      } else if (token === '+') {
        second = stack.pop();
        first = stack.pop();
        stack.push(first + second);
      } else if (token === '-') {
        second = stack.pop();
        first = stack.pop();
        stack.push(first - second);
      } else {
        if (!isNaN(token)) {
          stack.push(Number(token));
        }
      }
    }

    return stack;
  }


}

