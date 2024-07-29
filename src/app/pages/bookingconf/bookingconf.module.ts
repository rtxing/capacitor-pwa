import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingconfPageRoutingModule } from './bookingconf-routing.module';

import { BookingconfPage } from './bookingconf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingconfPageRoutingModule
  ],
  declarations: [BookingconfPage]
})
export class BookingconfPageModule {}
