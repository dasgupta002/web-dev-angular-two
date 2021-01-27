import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { IgorComponent } from './igor.component';
import { MiskoComponent } from 'app/misko.component';

const routes: Routes = [
  { path : 'igor', component : IgorComponent },
  { path : 'misko', component : MiskoComponent }
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
	HomeComponent, 
	IgorComponent,
	MiskoComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
