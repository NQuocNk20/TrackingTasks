import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoComponent } from './todo/todo.component';

import {MatToolbarModule} from '@angular/material/toolbar';//https://material.angular.io/components/toolbar/api
import {MatCardModule} from '@angular/material/card';//https://material.angular.io/components/card/api
import {MatFormFieldModule} from '@angular/material/form-field';//https://material.angular.io/components/form-field/api
import {MatInputModule} from '@angular/material/input';//https://material.angular.io/components/input/api
import {MatIconModule} from '@angular/material/icon';//https://material.angular.io/components/icon/api
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,//
    BrowserAnimationsModule,
    MatToolbarModule,//
    MatCardModule,//
    MatFormFieldModule,//
    MatInputModule,//
    MatIconModule,//
    MatButtonModule,//
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
