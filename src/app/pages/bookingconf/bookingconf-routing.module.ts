import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingconfPage } from './bookingconf.page';

const routes: Routes = [
  {
    path: '',
    component: BookingconfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingconfPageRoutingModule {}
