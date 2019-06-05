import { ActivatedRoute } from '@angular/router';
import { GitAssignmetService } from './../services/git-assignmet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-assgnment',
  templateUrl: './git-assgnment.component.html',
  styleUrls: ['./git-assgnment.component.css']
})
export class GitAssgnmentComponent implements OnInit {
  followers;
  constructor(private route:ActivatedRoute, private service : GitAssignmetService) { }

  ngOnInit() {
    // let page = this.route.snapshot.queryParamMap.get('page');
    // console.log(page);

    // this.route.queryParamMap
    // .subscribe(params => {
    //   let page = params.get('page');
    //   let order = params.get('order');
    //   console.log(page,order);
    // });

    this.service.getAll().
    subscribe(followersResponse => {
      this.followers = followersResponse;
    });
  }

}
