import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerdetailsPageRoutingModule } from './sellerdetails-routing.module';

import { SellerdetailsPage } from './sellerdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellerdetailsPageRoutingModule
  ],
  declarations: [SellerdetailsPage]
})
export class SellerdetailsPageModule {}
