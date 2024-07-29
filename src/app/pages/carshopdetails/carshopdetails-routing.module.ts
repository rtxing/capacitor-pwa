import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarshopdetailsPage } from './carshopdetails.page';

const routes: Routes = [
  {
    path: '',
    component: CarshopdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarshopdetailsPageRoutingModule {}
