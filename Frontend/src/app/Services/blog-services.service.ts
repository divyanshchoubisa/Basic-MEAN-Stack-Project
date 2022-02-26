import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Blog} from '../../app/Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogServicesService {

  constructor(private http:HttpClient) { }

  localhost = "http://localhost:8000/blog"

  createBlogPost(blog: any){
    return this.http.post(this.localhost,blog)
  }

  getBlogPost(): Observable<Blog[]>{
    return this.http.get<Blog[]>(this.localhost);
  }
  
  deleteBlogPost(blog: Blog):Observable<Blog>{
    const url = `${this.localhost}/${blog._id}`;
    console.log(blog)
    return this.http.delete<Blog>(this.localhost +`/${blog._id}`);
  }

  updateInfo(blogpost: any){
    console.log(blogpost);
    return this.http.put(this.localhost +`/${blogpost._id}`, blogpost)
  }
}
