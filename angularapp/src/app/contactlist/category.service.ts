import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';

import { Category } from "./category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiURL = "/api";


  //Http Header Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //Created constructor
  constructor(private httpClient: HttpClient) { }


  //Gets all categories from api
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/ContactCategories/')
      .pipe(
        catchError(this.errorHandler)
      )
  }


  //Adds a new category through api
  add(category: Category): Observable<any> {
    return this.httpClient.post(this.apiURL + '/ContactCategories/', JSON.stringify(category), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  //Retrieves category at specified id
  find(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/ContactCategories/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //Retrieves category with specified name
  findByName(name: string): Observable<any> {
    return this.httpClient.get(this.apiURL + '/ContactCategories/name/' + name)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //Updates category at specified id
  update(id: number, category: Category): Observable<any> {
    return this.httpClient.put(this.apiURL + '/ContactCategories/' + id, JSON.stringify(category), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  //Deletes category at specified id
  delete(id: number) {
    return this.httpClient.delete(this.apiURL + '/ContactCategories/' + id, this.httpOptions)
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
