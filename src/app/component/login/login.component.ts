import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from 'src/app/service/auth.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /*
  model: Login = { userid: "admnin", password: "admin@123" };
  loginForm: FormGroup;
  message?: string;
  returnUrl?: string;
*/
  public email:string="";
  public password:string="";

  constructor( private formBuilder: FormBuilder,private router: Router,private authService: AuthService) {
    /*
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/dashboard';
    this.authService.logout();
    */
   }

  ngOnInit(): void {
    /*
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
   });
    this.returnUrl = '/dashboard';
    this.authService.logout();
    */
  }

  onSubmitLogin(){
  	this.authService.loginEmail(this.email,this.password)
    .subscribe((token:any)=>{
      console.log(token);

    })
    this.router.navigate(['/dashboard']);
  }

  /*
  // convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

login() {

   // stop here if form is invalid
   if (this.loginForm.invalid) {
      return;
   }
   else {
      if (this.f.userid.value == this.model.userid && this.f.password.value == this.model.password) {
      console.log("Login successful");
      //this.authService.authLogin(this.model);
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('token', this.f.userid.value);
      this.router.navigate([this.returnUrl]);
      }
   else {
      this.message = "Please check your userid and password";
      }
     }
  }
*/
}
