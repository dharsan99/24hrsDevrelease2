import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router: Router,private http:HttpService,
    private toastCtrl: ToastController){}


  ngOnInit() {
  }
 
 
  emailid:any = '';
  sellername:any = '';
  mobilenumber:any = '';
  password:any = '';

  signup(){
    const userData = {
      seller_name :  this.sellername,
      email_id :  this.emailid,
      mobile_number :  this.mobilenumber,
      password : this.password 
    }
    
    this.http.post('/seller_register', userData).subscribe((response: any) => {
      if(response.success == "true"){
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
        console.log(response);
        
        this.navigateSigninPage()
      }
    },(error: any) =>{
      console.log(error);
    }
    );
  }

  navigateSigninPage()
  {
    this.router.navigate(['/tabs'])
  }
  signinPage(){
    this.router.navigate(['/'])
  }


  }
  
