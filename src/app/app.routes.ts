import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SettlementsComponent } from './components/settlements/settlements.component';

export const routes: Routes = [
  {path: "", component: LandingPageComponent},
  {path: "settlements", component: SettlementsComponent},

];
