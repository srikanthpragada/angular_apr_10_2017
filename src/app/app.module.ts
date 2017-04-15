import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BracketsPipe } from './brackets.pipe';
import { CustomPipesComponent } from './custom-pipes.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ CustomPipesComponent , BracketsPipe ],
  bootstrap:    [ CustomPipesComponent ]
})
export class AppModule { }
