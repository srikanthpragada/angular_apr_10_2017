import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveLoginComponent } from './forms/reactive-login.component';

import { BooksComponent } from './http/books.component';
import { ListBooksComponent } from './http/list-books.component';

import { GitHubComponent } from './http/github.component';

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [BooksComponent, ListBooksComponent, GitHubComponent],
  bootstrap: [ GitHubComponent ],
})
export class AppModule { }
