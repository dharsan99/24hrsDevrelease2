import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.page.html',
  styleUrls: ['./myproducts.page.scss'],
})
export class MyproductsPage implements OnInit {

  constructor(private router: Router,) { }
  exit(){
    this.router.navigate(['/tabs'])
  }
  ngOnInit() {
  }

}
