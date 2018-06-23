import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { ApiService } from '../shared/api.service';
import { RouterModule, Routes } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isError:Boolean = false;
  constructor(private _httpClient:HttpClient, private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    if(this._apiService.isUserLoggedin()) {
      this._router.navigate(['dashboard/home']);
    }  
  }

  OnSubmit(userEmail, userPassword) {
    //console.log(" ------ " + userEmail + " : " + userPassword);
    this.isError = false;
    this._apiService.login(userEmail, userPassword).subscribe((response: Boolean) => {
      if(response == true) {
        this._router.navigate(['dashboard/home']);
      } else {
        console.log("Response false");
      }
    },
    err=> {
      console.log("Catched Error: " + err.error);
      const errorResponse = JSON.parse(JSON.stringify(err));
      console.log("typeof errorResponse: " + typeof errorResponse);
      console.log("Error Message: " + errorResponse.error.message);
    });
  }

}
