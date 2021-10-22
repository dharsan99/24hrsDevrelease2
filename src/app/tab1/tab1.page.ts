import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router,private menu: MenuController) {}
  myproducts(){
    this.router.navigate(['/myproducts'])
  }

  offer(){
    this.router.navigate(['/tabs/tab4'])
  }
}
