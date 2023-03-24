import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public contacts?: Contacts[];

  constructor(http: HttpClient) {
    http.get<Contacts[]>('/api/Contacts').subscribe(result => {
      this.contacts = result;
    }, error => console.error(error));
  }

  title = 'angularapp';
}

interface Category {
  id: number;
  name: string;
}

interface Contacts {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  categoryId: number;
  category: { [key: string]: Category };
  subcategoryId: number;
  subcategory?: { [key: string]: Category };
  phoneNumber: string;
  dateOfBirth: string;
}
