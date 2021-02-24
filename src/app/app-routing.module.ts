import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircuitsComponent } from './pages/circuits/circuits.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { HomeComponent } from './pages/home/home.component';
import { SeasonsComponent } from './pages/seasons/seasons.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'circuits', component: CircuitsComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'seasons', component: SeasonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
