import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CourseComponent }  from './app.coursecomponent';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ CourseComponent ],
  bootstrap:    [ CourseComponent ]
})
export class AppModule { }
