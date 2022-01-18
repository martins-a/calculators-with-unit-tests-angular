import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleCalculatorService } from 'src/app/services/simple-calculator.service';

import { SimpleCalculatorComponent } from './simple-calculator.component';

fdescribe('SimpleCalculatorComponent', () => {
  let component: SimpleCalculatorComponent;
  let fixture: ComponentFixture<SimpleCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleCalculatorComponent],
      providers: [SimpleCalculatorService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do plus operation', () => {
    component.numericBtnClick('5');
    component.plusBtnClick();
    component.numericBtnClick('5');
    component.equalBtnClick();
    expect(component.displayerValue).toBe(10);
  });
});


