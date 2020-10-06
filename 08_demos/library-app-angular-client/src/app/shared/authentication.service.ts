import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 public authInfo:AuthInfo=null;

  constructor(private http: HttpClient) { 
    this.loadFromStorage();
  }

  hasToken():boolean{

    if(null == this.authInfo || null == this.authInfo.token)
    return false;

    return true;
  }

  save(authInfo:AuthInfo){
    this.authInfo = authInfo;
    localStorage.setItem("authInfo",JSON.stringify(authInfo));
  }
  loadFromStorage(){
   
    if(localStorage.getItem("authInfo")){
      this.authInfo= JSON.parse(localStorage.getItem("authInfo"));

    }
  
    
  }
  logout(){
    this.authInfo = null;
    localStorage.removeItem("authInfo");
    

  }
  login(user:string,password:string,callback:any){

    
    const addBookUrl = environment.apiUrl + "/login"
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const request ={
        "username":user,
        "password":password
    }
    

     this.http.post<AuthInfo>(addBookUrl, request, httpOptions).subscribe(
      (data: AuthInfo) => {
        this.save(data) // success path
        callback(null);
      },
      error => callback( error) // error path
    );
     
     
  }
}
