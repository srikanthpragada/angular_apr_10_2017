import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AuthorsListComponent } from './routing/authors-list.component';
import { AuthorDetailsComponent } from './routing/author-details.component';
import { MainComponent } from './routing/main.component';
import { HomeComponent } from './routing/home.component';
import { NotFoundComponent } from './routing/not-found.component';

const appRoutes : Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'authors', component: AuthorsListComponent },
  { path: 'details/:id', component:  AuthorDetailsComponent },
  { path: '', component : HomeComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes), BrowserModule],
  declarations: [ HomeComponent, 
                  AuthorDetailsComponent,
                  AuthorsListComponent, 
                  MainComponent,
                  NotFoundComponent
                ],
  bootstrap: [MainComponent  ],
})
export class AppModule { }
