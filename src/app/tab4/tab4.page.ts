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
      this.blurred = false;
      // put the code from `ngOnInit` here
     
    });

  }

  ngOnInit() {
    
   
  }

  isvisible:any = false;
  blurred:any = false;

  addoffer(){
    
    this.isvisible = true;
    this.blurred = true;
  }

  
  confirm(){
    this.isvisible = false;
    this.router.navigate(['/tabs/tab4'])
  }
}
