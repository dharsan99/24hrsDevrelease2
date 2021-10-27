import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerdetailsPage } from './sellerdetails.page';

const routes: Routes = [
  {
    path: '',
    component: SellerdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerdetailsPageRoutingModule {}
