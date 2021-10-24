import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  
  

  close(){
    this.router.navigate(['/'])
  }

  home(){
    this.router.navigate(['/tabs'])             
  } 

  myproducts(){
    this.router.navigate(['/myproducts'])
              
  }

  promotion(){
    this.router.navigate(['/tabs/tab2'])             
  }

  offers(){
    this.router.navigate(['/tabs/tab4'])             
  }


  myprofile(){
    this.router.navigate(['/tabs/tab5'])             
  }

  support(){
    this.router.navigate(['/support'])             
  }

  logout(){
    this.router.navigate(['/'])
  }
  
}
