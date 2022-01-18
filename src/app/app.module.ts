import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleCalculatorComponent } from './components/simple-calculator/simple-calculator.component';
import { SimpleCalculatorService } from './services/simple-calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    SimpleCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    SimpleCalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
