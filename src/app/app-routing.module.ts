import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NewOrderNologinComponent } from './pages/new-order-nologin/new-order-nologin.component';
import { OrderRecapNologinComponent } from './pages/order-recap-nologin/order-recap-nologin.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { Tracking } from "./pages/tracking/tracking.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new-order-nologin', component: NewOrderNologinComponent },
  { path: 'order-recap-nologin', component: OrderRecapNologinComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'track', component: Tracking },
    // otherwise redirect to home
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
