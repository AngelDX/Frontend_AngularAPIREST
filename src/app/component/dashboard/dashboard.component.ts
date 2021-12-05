import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id?: string | null;
  isLogin?:boolean;


  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('isLoggedIn');
    console.log("dashboard: "+this.id);
  }




}
