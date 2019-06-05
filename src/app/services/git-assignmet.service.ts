import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data-servics';

 

@Injectable({
  providedIn: 'root'
})
export class GitAssignmetService extends DataService{

  constructor(http : HttpClient) { 
    super("https://api.github.com/users", http);
  }

}
