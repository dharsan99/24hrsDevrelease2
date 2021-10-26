import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private http:HttpService,private router: Router,private menu: MenuController) {}

  ngOnInit() {
    this.list()
  }

  listOfCat:any =[];

  myproducts(){
    this.router.navigate(['/myproducts'])
  }

  offer(){
    this.router.navigate(['/tabs/tab4'])
  }

  list(){
   
    
    this.http.get('/read_category', ).subscribe((response: any) => {

        console.log(response);
        this.listOfCat = response.records
    },(error: any) =>{
      console.log(error);
    }
    );
  }
}
