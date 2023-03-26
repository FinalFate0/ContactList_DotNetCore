import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  //Component 

  id!: number;
  contact!: Contact;
  form!: FormGroup;


  constructor(public contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['contactId'];
    this.contactService.find(this.id).subscribe((result: Contact) => {
      this.contact = result;

      //fills the form with the retrieved contact's attribute values
      this.form.patchValue({
        firstName: this.contact.firstName,
        lastName: this.contact.lastName,
        dateOfBirth: this.contact.dateOfBirth,
        phoneNumber: this.contact.phoneNumber,
        email: this.contact.email,
        password: this.contact.password,
      });

    });
    //initializes the form containing every contact attribute
    //'Validators.required' checks that the fields aren't empty
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  //allows easier access to current form control field values
  get f() {
    return this.form.controls;
  }


  submit() {
    //Updates the contact with new values from the form using the contact service

    //retrieves all values from the form
    var formValues = this.form.value;

    //add id of the contact being edited to the form values
    formValues['id'] = this.id;

    //casts the phone number to a string, as required by the database model
    formValues['phoneNumber'] = String(formValues['phoneNumber']);
    console.log(formValues);

    //updates the contact
    this.contactService.update(this.id, formValues).subscribe((result: any) => {
      console.log('Contact has been updated');
      this.router.navigateByUrl('contactlist/index');
    })
  }

}
