import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NewOrderNologinComponent } from './pages/new-order-nologin/new-order-nologin.component';
import { OrderRecapNologinComponent } from './pages/order-recap-nologin/order-recap-nologin.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'new-order-nologin', component: NewOrderNologinComponent },
  { path: 'order-recap-nologin', component: OrderRecapNologinComponent },

  


    // otherwise redirect to home
    { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }