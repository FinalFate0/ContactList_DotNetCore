import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  //Shows the details of a single contact

  id!: number;
  contact!: Contact;


  constructor(
    public contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    //retrieves the id of a contact chosen by the user and finds it using the contact service
    this.id = this.route.snapshot.params['contactId'];
    this.contactService.find(this.id).subscribe((result: Contact) => {
      this.contact = result;
    });
  }

}
