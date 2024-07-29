import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarshopdetailsPageRoutingModule } from './carshopdetails-routing.module';

import { CarshopdetailsPage } from './carshopdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarshopdetailsPageRoutingModule
  ],
  declarations: [CarshopdetailsPage]
})
export class CarshopdetailsPageModule {}
