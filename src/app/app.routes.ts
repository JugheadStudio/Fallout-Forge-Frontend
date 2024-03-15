import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
// import { NgModule } from '@angular/core';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SettlementsComponent } from './pages/settlements/settlements.component';
import { SettlementsAllComponent } from './pages/settlements-all/settlements-all.component';
import { AdminComponent } from './pages/admin/admin.component';
import { IndividualSettlementComponent } from './pages/individual-settlement/individual-settlement.component';

// export const routes: Routes = [
export const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  {path: "", component: LandingPageComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "settlements", component: SettlementsComponent},
  {path: "settlements-all", component: SettlementsAllComponent},
  {path: "settlement1", component: IndividualSettlementComponent},
  {path: "admin", component: AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }