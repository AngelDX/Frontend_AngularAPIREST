import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, Subject,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  logout() :void {
    localStorage.setItem('isLoggedIn','false');
    localStorage.removeItem('token');
  }

  loginEmail(email:string, pass:string){
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token cbe45713903f0e159565553e96fd62d3f3f184a3',
    });
    let params = new HttpParams().set("username",email).set("password", pass); //Create new HttpParams

    //return this.http.get("http://127.0.0.1:8000/api-token-auth/",{ headers: reqHeader,params: params });
    return this.http.post("http://127.0.0.1:8000/api-token-auth/",{ username: email,password:pass });
  }


  isLoggedIn(){

    let status = false; //No se actuliza el inLogin a true
    if (localStorage.getItem('isLoggedIn') == "true") {
       status = true;
    }else {
      status = false;
    }
   return status;
  }


}
