import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl="http://localhost:8090/login";
  constructor(private http: HttpClient) {
}
    
  login(credentials:{username:string, password:string }) :Observable<any>{
          return this.http.post<any>(this.apiUrl,credentials);
      }


      getToken():string|null
      {
return localStorage.getItem('token');
      }
      
}