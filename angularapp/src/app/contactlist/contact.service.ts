import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';

import { Contact } from "./contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  //Handles sending API calls through the HTTP Client
  private apiURL = "/api";

  //Http Header Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //Created constructor
  constructor(private httpClient: HttpClient) { }


  //Gets all contacts from api
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/Contacts/')
      .pipe(
        catchError(this.errorHandler)
      )
  }


  //Adds a new contact through api
  add(formValues: any): Observable<any> {
    return this.httpClient.post(this.apiURL + '/Contacts/', JSON.stringify(formValues), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  //Retrieves contact at specified id
  find(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/Contacts/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  //Updates contact at specified id
  update(id: number, contact: Contact): Observable<any> {
    return this.httpClient.put(this.apiURL + '/Contacts/' + id, JSON.stringify(contact), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  //Deletes contact at specified id
  delete(id: number) {
    return this.httpClient.delete(this.apiURL + '/Contacts/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //Simple error handler for basic debbuging
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
