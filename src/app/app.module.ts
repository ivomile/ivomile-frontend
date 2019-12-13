import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NewOrderNologinComponent } from './pages/new-order-nologin/new-order-nologin.component';


//Material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule ,
    MatToolbarModule,
    MatButtonModule
  ],

  declarations: [ 
    AppComponent, 
    HeaderComponent, 
    AboutComponent, 
    FooterComponent, 
    HomeComponent,
    NewOrderNologinComponent,
    Headerv2Component
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
export class AppRoutingModule { }