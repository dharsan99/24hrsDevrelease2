import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  constructor(private router: Router) {}
  name = 'Angular Toggle Show Hide';
  showMyContainer: boolean = false;
  
  support(){
    this.router.navigate(['/support'])
  }

}
