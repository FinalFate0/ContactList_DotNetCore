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
  id!: number;
  contact!: Contact;
  form!: FormGroup;


  constructor(public contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['contactId'];
    this.contactService.find(this.id).subscribe((result: Contact) => {
      this.contact = result;

      this.form.patchValue({
        firstName: this.contact.firstName,
        lastName: this.contact.lastName,
        dateOfBirth: this.contact.dateOfBirth,
        phoneNumber: this.contact.phoneNumber,
        email: this.contact.email,
        password: this.contact.password,
      });

    });
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  get f() {
    return this.form.controls;
  }


  submit() {
    var formValues = this.form.value;

    formValues['id'] = this.id;
    formValues['phoneNumber'] = String(formValues['phoneNumber']);
    console.log(formValues);

    this.contactService.update(this.id, formValues).subscribe((result: any) => {
      console.log('Contact has been updated');
      this.router.navigateByUrl('contactlist/index');
    })
  }

}
