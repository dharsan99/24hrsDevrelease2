import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(private router: Router, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.isvisible = false;
      this.cardVisible =true;
      // put the code from `ngOnInit` here
     
    });

  }

  ngOnInit() {
    
   
  }
  cardVisible:any = true;
  isvisible:any = false;
  
  addoffer(){
    this.cardVisible =false;
    this.isvisible = true;
    
  }

  
  confirm(){
    this.cardVisible = true;
    this.isvisible = false;
  }
}
