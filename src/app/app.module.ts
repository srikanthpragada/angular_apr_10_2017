import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { CourseComponent }  from './course.component';
import { InterestComponent }  from './interest.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ CourseComponent, InterestComponent ],
  bootstrap:    [ InterestComponent ]
})
export class AppModule { }
