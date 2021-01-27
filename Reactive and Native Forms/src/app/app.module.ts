import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms.component';
import { ReactiveComponent } from './reactive.component';
import { BasicComponent } from 'app/basic.component';

const routes: Routes = [
  { path : '', redirectTo : '/home', pathMatch : 'full' },
  { path: 'home', component: BasicComponent },
  { path : 'reactive', component : ReactiveComponent },
  { path : 'basic', component : BasicComponent }
];

@NgModule({
  declarations: [
    AppComponent,
	FormsComponent,
	ReactiveComponent,
	BasicComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
