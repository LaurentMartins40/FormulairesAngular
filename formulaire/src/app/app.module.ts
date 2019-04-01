import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { FormsModule, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { TemplateComponent } from './template/template.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import {  TypescriptFirstComponent } from './typescript-first/typescript-first.component';
import { ValidatorsComponent } from './validators/validators.component';
import { StylesComponent } from './styles/styles.component';
@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    TwoWayBindingComponent,
    TypescriptFirstComponent,
    ValidatorsComponent,
    StylesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
