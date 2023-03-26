import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';

import { Category } from "./category";

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  private apiURL = "/api";


  //Http Header Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //Created constructor
  constructor(private httpClient: HttpClient) { }


  //Gets all subcategories from api
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/ContactSubcategories/')
      .pipe(
        catchError(this.errorHandler)
      )
  }


  //Adds a new subcategory through api
  add(name: string): Observable<any> {
    var subcategory = { name: name }
    return this.httpClient.post(this.apiURL + '/ContactSubcategories/', JSON.stringify(subcategory), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  //Retrieves subcategory at specified id
  find(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/ContactSubcategories/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //Retrieves subcategory with specified name
  findByName(name: string): Observable<any> {
    return this.httpClient.get(this.apiURL + '/ContactSubcategories/name/' + name)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //Updates subcategory at specified id
  update(id: number, subcategory: Category): Observable<any> {
    return this.httpClient.put(this.apiURL + '/ContactSubcategories/' + id, JSON.stringify(subcategory), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  //Deletes subcategory at specified id
  delete(id: number) {
    return this.httpClient.delete(this.apiURL + '/ContactSubcategories/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `An error occurred.\nError code: ${error.status}\nError message:${error.message}`;
    }
    return throwError(errorMessage);
  }
}
