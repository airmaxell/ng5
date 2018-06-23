import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, filter, scan, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public token: string;

  constructor(private _httpClient: HttpClient) { 
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  isUserLoggedin():Boolean {
    const user = localStorage.getItem('currentUser');
    if(user) {
      console.log("User logged in: " + user);
      return true;
    }
    return false;
  }

  login(userEmail: string, userPassword: string):Observable<Boolean> {
      console.log("usao u login");
      return this._httpClient.post('http://api.catch-ai.com:8000/v1/login', { "email": userEmail, "password": userPassword }, {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      })
      .pipe(
        map((res: HttpResponse<JSON>) => {
          console.log("Usao u res");
          const response = JSON.parse(JSON.stringify(res));
          const token = response.token;
          console.log("typeof res: " + typeof response);
          console.log("Token: " + token);
          console.log("User email: " + response.user.email);
          if(token) {
            localStorage.setItem('currentUser', JSON.stringify({userEmail, token}));
            return true;
          } 
          return false;
        }, (err: HttpErrorResponse) => {
          console.log("Usao u err");
          const errorResponse = JSON.parse(JSON.stringify(err));
          console.log("typeof errorResponse: " + typeof errorResponse);
          console.log("Error Message: " + errorResponse.message);

        })
      );
      // localStorage.setItem('currentUser', JSON.stringify({ userEmail, token }));
  }

  logout(): void {
      // clear token remove user from local storage to log user out
      this.token = null;
      localStorage.removeItem('currentUser');
  }

}
