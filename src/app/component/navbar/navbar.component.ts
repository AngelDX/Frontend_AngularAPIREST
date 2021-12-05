import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean=false;
  //data$:Observable<boolean>;



  constructor(private authservice:AuthService, private router:Router) {

    //this.data$=this.authservice.isLoggedIn();
    //console.log(this.data$);
    //console.log(this.authservice.isLoggedIn());
    /*
    this.authservice.isLoggedIn().subscribe(data=>{
      console.log(data);
      if(data){
        this.isLogin=true;
      }else{
        this.isLogin=false;
      }
    })
    */
    //this.authservice.isLoggedIn().subscribe(data=>{
    //  console.log("subscripcion: " +data)
    //});

  }



  ngOnInit(): void {

    console.log("navbar: "+localStorage.getItem('isLoggedIn'));
    if(localStorage.getItem('isLoggedIn')=="true"){
     this.isLogin=true;
    }else{
     this.isLogin=false;
    }
  }

  logout() {
    this.authservice.logout();
    this.router.navigate(['/']);
  }

}
