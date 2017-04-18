import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ReactiveLoginComponent } from './forms/reactive-login.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ReactiveLoginComponent],
  bootstrap: [ReactiveLoginComponent  ],
})
export class AppModule { }
