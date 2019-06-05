import { GitAssignmetService } from './../services/git-assignmet.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-git-hub-profile',
  templateUrl: './git-hub-profile.component.html',
  styleUrls: ['./git-hub-profile.component.css']
})
export class GitHubProfileComponent implements OnInit {

  constructor(private route : ActivatedRoute, private service: GitAssignmetService
    ,private router: Router) { }

  ngOnInit() {

    //How to get required and optional parammeters at the same time.

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(
      switchMap(combined =>{
        let username = combined[0].get('username');
        let page = combined[1].get('page');
        console.log(username,page);
        return this.service.getAll();
      })
    ).subscribe(result=>{
        console.log(result);
    });

    // let id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    // this.route.paramMap
    // .subscribe(params =>{
    //   let id = +params.get('id');
    //   let username = params.get('username');
    //   console.log(id,username);
    // });
  }

  back(){
    this.router.navigate(['followers'], {
      queryParams:{
        page:1,order:'newest'
      }
    });
  }

}
