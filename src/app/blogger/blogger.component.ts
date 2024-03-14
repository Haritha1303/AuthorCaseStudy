import { Component, OnInit } from '@angular/core';
import { BloggerService } from '../blogger.service';
import { Blogger } from '../blogger';
@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.css']
})
export class BloggerComponent implements OnInit {


  bloggers:Blogger[] =[];

constructor(private bloggerService :BloggerService){}

ngOnInit(): void {
  this.getAllBlogs();
  
}

getAllBlogs():void{
  this.bloggerService.getAllBlogs().subscribe(bloggers=>this.bloggers=bloggers);
}

}
