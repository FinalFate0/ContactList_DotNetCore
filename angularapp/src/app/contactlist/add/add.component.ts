import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form!: FormGroup;


  constructor(public contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
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
    //Adds a new contact with values from the form using the contact service

    //retrieves all values from the form
    var formValues = this.form.value;

    //casts the phone number to a string, as required by the database model
    formValues['phoneNumber'] = String(formValues['phoneNumber']);
    console.log(formValues);

    //updates the contact
    this.contactService.add(this.form.value).subscribe((result: any) => {
      console.log('New contact has been added');
      this.router.navigateByUrl('contactlist/index');
    });
  }

}
