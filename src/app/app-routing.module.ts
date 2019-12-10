import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  //{ path: '', component: AppComponent },
  { path: 'home', component: AppComponent },
  { path: 'about', component: AboutComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }