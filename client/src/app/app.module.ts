import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { Router } from 'express';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import * as path from 'path';
import { CrisesCenterComponent } from './crises-center/crises-center.component';

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroListComponent,
    data: {
      title: 'Heroes List'
    }
  },
  {
    path: 'crisis-center',
    component: CrisesCenterComponent
  },
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HeroListComponent,
    PageNotFoundComponent,
    CrisesCenterComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes, {
        enableTracing: true
      } // <-- debugging purposes only
    ),
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
