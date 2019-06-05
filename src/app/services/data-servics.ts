import { AppError } from './../common/app-error';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

 

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private url: string, private  http : HttpClient) { }

  getAll(){
    return this.http.get(this.url)
    .pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }
  add(resource){
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
        map(response => response),
      catchError(this.handleError)
    );
  }
  update(resource){
    return this.http.patch(this.url+'/'+resource.id,JSON.stringify({isRead:true})).pipe(map(response => response),
      catchError(this.handleError)
    );
  }
  delete(id){
    return this.http.delete(this.url+'/'+id).pipe(map(response => response),
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse){
      if(error.status === 404)
        return throwError(new NotFoundError());
      if(error.status === 400)
        return throwError(new BadInput());

      return throwError(new AppError(error));

  }
  
}
