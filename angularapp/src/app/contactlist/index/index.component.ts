import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getAll().subscribe((result: Contact[]) => {
      this.contacts = result;
      console.log(this.contacts);
    })
  }


  deleteContact(id: number) {
    this.contactService.delete(id).subscribe(result => {
      this.contacts = this.contacts.filter(contact => contact.id !== id);
      console.log('Contact has been deleted');
    })
  }

}
