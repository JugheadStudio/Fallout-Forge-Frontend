import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
// import { NgModule } from '@angular/core';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SettlementsComponent } from './components/settlements/settlements.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

// export const routes: Routes = [
export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  {path: "landing", component: LandingPageComponent},
  {path: "settlements", component: SettlementsComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }