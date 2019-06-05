import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {
  year;month;
  constructor(private route:ActivatedRoute,private router: Router) { }

  ngOnInit() {
    let params = this.route.snapshot.paramMap;
    this.year = params.get('year');
    this.month = params.get('month');

    // this.route.paramMap
    // .subscribe(params=>{
    //   this.year = params.get('year');
    //   this.month = params.get('month');
    // })
  }

  back(){
    this.router.navigate(['']);
  }

}
