import { Component, OnInit } from '@angular/core';

import { enumOperations } from 'src/app/constants/enumOperations';
import { SimpleCalculatorService } from 'src/app/services/simple-calculator.service';

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.css'],
  providers: [
    SimpleCalculatorService
  ]
})
export class SimpleCalculatorComponent implements OnInit {

  constructor(private simpleCalculatorService: SimpleCalculatorService) { }

  displayerValue = 0;
  calcMem: number[] = [];
  operationChain: number[] = [];

  ngOnInit(): void {



  }

  public numericBtnClick(valuePressed: string): void {
    if ( this.displayerValue ) {
      this.updateDisplayer(Number(this.displayerValue.toString() + valuePressed));
    } else {
      this.updateDisplayer(Number(valuePressed));
    }
  }

  private feedMemory(value: number): void {
    this.calcMem.push(value);
  }

  private eraseMemory(): void {
    this.calcMem = [];
  }

  private feedOperationChain(operation: number): void {
    this.operationChain.push(operation);
  }

  private eraseOperationChain(): void {
    this.operationChain = [];
  }

  public equalBtnClick(): void {

    this.feedMemory(this.displayerValue);

    if (!this.operationChain.length) {
      return;
    }

    let result = 0;

    let index = 0;

    for ( const operator of this.operationChain ) {
      result = this.simpleCalculatorService.doOperation(operator, this.calcMem[index], this.calcMem[index+1]);
      debugger
    }

    this.eraseMemory();
    this.eraseOperationChain();
    this.updateDisplayer(result);

  }

  private updateDisplayer(value: number): void {
    this.displayerValue = value;
  }

  private eraseDisplayer(): void {
    this.displayerValue = 0;
  }

  public plusBtnClick(): void {
    this.feedMemory(this.displayerValue);
    this.feedOperationChain(enumOperations.plus);
    this.eraseDisplayer();
  }

}
