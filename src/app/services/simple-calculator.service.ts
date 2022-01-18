import { Injectable } from '@angular/core';

import { enumOperations } from 'src/app/constants/enumOperations';

@Injectable()
export class SimpleCalculatorService {
  constructor() { }

  doOperation(operator: number, valueA: number, valueB: number): number {


    switch(operator) {
      case enumOperations.plus:
        return this.plusOperation(valueA,valueB);
      default:
        return 0;
    }

  }

  private plusOperation(valueA: number, valueB: number): number {
    return valueA + valueB;
  }


}
