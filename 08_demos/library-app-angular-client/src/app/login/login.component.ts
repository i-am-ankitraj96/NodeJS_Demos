import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../shared/authentication.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,public authenticationService:AuthenticationService,private router: Router) { }

  ngOnInit() {

    this.loginFormGroup = this.formBuilder.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    
    })
  //  this.loginFormGroup.valueChanges.subscribe(this.onValueChange)
  }

  onValueChange(evt:any){
    console.log(evt)
  }

  fillTestCredentials(){

    this.loginFormGroup.get("username").setValue("test");
    this.loginFormGroup.get("password").setValue("test");

  }
  
  onLogin(){

    let username = this.loginFormGroup.get("username").value;
    let password = this.loginFormGroup.get("password").value;

    this.authenticationService.login(username,password,(error)=>{

      if(error){
        alert("Invalid User")
       
      }else{
        this.router.navigate(['/books']);
        
      }
    })
    

    console.log("Username => " + this.loginFormGroup.get("username").value);
    console.log("Password => " + this.loginFormGroup.get("password").value);

    console.log("All Values as JSON " ,this.loginFormGroup.getRawValue());
  

  }

  get username() {
    return this.loginFormGroup.get('username');
  }

  get password() {
    return this.loginFormGroup.get('password');
  }
}
