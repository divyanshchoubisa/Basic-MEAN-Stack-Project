import { Component, OnInit } from '@angular/core';
import {BlogServicesService} from '../../Services/blog-services.service';
import {Blog} from '../../Blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  blogposts: Blog[] = [];
  isUsed=false;
  editObject={
    title:'',
    category:'',
    Content:''
  }
  constructor(private blogService:BlogServicesService) { }
  
  ngOnInit(): void {
    this.blogService.getBlogPost().subscribe((response)=> this.blogposts=response)
  }

  publishPost(blog: any){
    this.blogService.createBlogPost(blog).subscribe((respose)=>{
    this.getPost();
    })
  }

  deletePost(blog: any){
    this.blogService.deleteBlogPost(blog)
    .subscribe(()=> this.getPost());
    console.log("Blog Deleted Successfully");
    
  }

  editPost(blog: any){
    this.isUsed = true;
    this.editObject = blog;  
  }

  getPost(){
    this.blogService.getBlogPost()
    .subscribe((response)=> this.blogposts=response as Blog[])
  }

  updateBlog(){
    this.isUsed != !this.isUsed;
    this.blogService.updateInfo(this.editObject)
    .subscribe(()=>{
      this.getPost();
    })
    this.isUsed = !this.isUsed;
  }
}
