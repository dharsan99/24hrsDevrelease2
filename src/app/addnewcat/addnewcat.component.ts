import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addnewcat',
  templateUrl: './addnewcat.component.html',
  styleUrls: ['./addnewcat.component.scss'],
})
export class AddnewcatComponent implements OnInit {

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit() {

  }
  

  name:any = '';

  
  backToprivious(){
    this.router.navigate['/tabs/tab3']
   }
   test(){
    console.log(this.name);
   }
   createCategory() {
     console.log(this.name);
     
    var date  = new Date().toISOString();
    const catData = {
      category_name: this.name,
      created_at:date
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
        
      }
    }, (error: any) => {
      console.log(error);
    }
    );

  }

}
