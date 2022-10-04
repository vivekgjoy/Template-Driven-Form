import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import "@angular/compiler";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent, 
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

})
  @NgModule({
    imports: [
        BrowserModule,
        FormsModule, ReactiveFormsModule
    ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
