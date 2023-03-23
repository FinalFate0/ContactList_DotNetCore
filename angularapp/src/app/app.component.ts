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

interface Contacts {
  Id: bigint;
  FirstName: string;
  LastName: string;
}
