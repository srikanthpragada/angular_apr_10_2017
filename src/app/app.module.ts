import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ReactiveLoginComponent } from './forms/reactive-login.component';

import { CartComponent} from './cart/cart.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ CartComponent],
  bootstrap: [ CartComponent  ],
})
export class AppModule { }
