import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostFixCalculatorComponent } from './post-fix-calculator/post-fix-calculator.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule,MatButtonModule} from '@angular/material';
import { ResultComponentComponent } from './result-component/result-component.component'
import { FormatResultPipe } from './shared/pipes/format-result.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostFixCalculatorComponent,
    ResultComponentComponent,
    FormatResultPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  exports:[ResultComponentComponent,PostFixCalculatorComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
