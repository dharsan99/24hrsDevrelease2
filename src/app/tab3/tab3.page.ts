import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(public popoverController: PopoverController, private router: Router, private http: HttpService,
    private toastCtrl: ToastController, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.isHidden = true;
      this.catPopup = false;
      // put the code from `ngOnInit` here

    });
  }

  ngOnInit() {
    this.getcat()

  }


  public date: string = new Date().toISOString();
  Category: any = '';
  subcategory:any = '';
  productname:any = '';
  description:any = '';
  cost:any = ''
  categoryList: any = [];
  isHidden: any = true;
  catPopup: any = false;
  categoryName:any = '';

  async upload(ev: any) {
    const popover = await this.popoverController.create({
      component: ModalComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  addproduct() {
    this.router.navigate(['/myproducts'])
  }
 backToprivious(){
  this.isHidden = true;
  this.catPopup = false;
 }
  createCategory() {
    this.isHidden = true;
    this.catPopup = false;
    const catData = {
      category_name: this.Category,
      created_at: this.date
    }



    this.http.post('/create_category', catData).subscribe((response: any) => {
      console.log(response);
      if (response.success == "true") {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })

        this.addproduct()
      }
    }, (error: any) => {
      console.log(error);
    }
    );

  }

  getcat() {

    this.http.get('/read_category',).subscribe((response: any) => {

      this.categoryList = response.records
      console.log(response.records);

    }, (error: any) => {
      console.log(error);
    }
    );
  }

  card() {
    if (this.Category == "1") {
      this.catPopup = true;
      this.isHidden = false;
      this.Category = ''
    }

  }

  addToProduct() {
    

      const productData = {
        category: this.Category,
        subcategory: this.date,
        product_name: this.date,
        description: this.date,
        cost: this.date
      }

      this.http.post('/create_category', productData).subscribe((response: any) => {
        console.log(response);
        if (response.success == "true") {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })

          this.addproduct()
        }
      }, (error: any) => {
        console.log(error);
      }
      );

    }

  }
