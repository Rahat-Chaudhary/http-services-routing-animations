import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { slide } from '../animation';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  animations:[
    slide
  ]
})
export class PostsComponent implements OnInit {

  posts;

  constructor(private service : PostService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(posts => {
      this.posts = posts;
    });
  }

  addPost(input: HTMLInputElement){
    let post = {title: input.value};
    this.posts.splice(0,0,post);

    input.value='';
    this.service.add(post)
    .subscribe(posts => {
      //post['id'] = posts.id;
    }, (error : AppError) => {
      this.posts.splice(0,1);
      if(error instanceof BadInput)
        alert("Bad Input Error");//this.form.setErrors(error.orignalError);
      else
        throw error;
    });
    console.log(post);
  }

  updatePost(post){
    this.service.update(post)
    .subscribe(posts => {
      console.log(posts);
    });
  }

  deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);

    this.service.delete(post.id)
    .subscribe(() =>{
      
    }, (error : AppError) => {
      this.posts.splice(index,0,post);
      if(error instanceof NotFoundError)
        alert("Not Found Error");
      else
      throw error;
    });
  }

}
