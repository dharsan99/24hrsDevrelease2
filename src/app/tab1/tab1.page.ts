import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private http: HttpService, private router: Router, private menu: MenuController) { }

  ngOnInit() {
    this.list()
  }

  listOfCat: any = [];
  listOfProduct: any = [];

  myproducts() {
console.log(this.listOfProduct);

    this.http.post('/read_product', '').subscribe((response: any) => { 
      this.listOfProduct = response.records;
        this.router.navigate(['/myproducts'],{ queryParams: { order: this.listOfProduct } })
    }, (error: any) => {
      console.log(error);
    }
    );

  }

  offer() {
    this.router.navigate(['/tabs/tab4'])
  }

  list() {
    this.http.get('/read_category',).subscribe((response: any) => {
      this.listOfCat = response.records;
    }, (error: any) => {
      console.log(error);
    }
    );
  }
}
