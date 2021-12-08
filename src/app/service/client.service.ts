import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  selectClient: Client=new Client();

  constructor(private http:HttpClient) { }

  API="http://127.0.0.1:8000/api/clientes/";

  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'token '+localStorage.getItem('token'),
    //'Authorization': 'token cbe45713903f0e159565553e96fd62d3f3f184a3',
  });

  getClients(){

    return this.http.get(this.API,{ headers: this.reqHeader });
  }

  createClient(cliente: Client){
    console.log(cliente);
    return this.http.post(this.API,cliente,{ headers: this.reqHeader });
  }

  updateClient(id:number,cliente:Client){
    return this.http.put(this.API+id+'/',cliente,{ headers: this.reqHeader });
  }

  deleteClient(id:number){
    return this.http.delete(this.API+id+'/',{ headers: this.reqHeader });

  }
}
