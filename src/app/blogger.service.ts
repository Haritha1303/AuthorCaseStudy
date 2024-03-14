import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BloggerService {

    private apiUrl="http://localhost:8090/blogApi/blog"

constructor(private http:HttpClient, private authService:AuthenticationService){}

getAllBlogs():Observable<any>
{
  const token =this.authService.getToken();
  console.log('Bearer'+token);
  const headers=new HttpHeaders({'Authorization':'Bearer'+token});
  console.log(headers);
  return this.http.get(this.apiUrl,{headers});
}

}
