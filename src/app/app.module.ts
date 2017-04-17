import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './forms/login.component';
// import { LogService } from './services/log.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [LoginComponent],
  bootstrap: [LoginComponent],
  // providers : [LogService]
})
export class AppModule { }
