import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { AlertModule } from 'ngx-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { ErrorComponent } from './error/error.component';
import { routes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { CreationComponent } from './creation/creation.component';

  // Initialize Firebase
  export const firebaseconfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    CreationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(firebaseconfig),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
