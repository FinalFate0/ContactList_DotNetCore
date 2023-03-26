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
      var subcategoryName;

      if (this.contact.subcategory) {
        subcategoryName = this.contact.subcategory['name'];
      } else {
        subcategoryName = '';
      }

      this.form.patchValue({
        firstName: this.contact.firstName,
        lastName: this.contact.lastName,
        dateOfBirth: this.contact.dateOfBirth,
        phoneNumber: this.contact.phoneNumber,
        email: this.contact.email,
        password: this.contact.password,
        category: this.contact.category['name'],
        subcategory: subcategoryName
      });

    });
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      subcategory: new FormControl('')
    });
  }
  ngOnChanges(changes: any) {
    if (this.f['category'].value === 'Business') {
      this.f['subcategory'].enable();
      this.f['subcategory'].setValidators(Validators.required);
    } else if (this.f['category'].value === 'Other') {
      this.f['subcategory'].enable();
      this.f['subcategory'].setValidators(Validators.required);
    } else {
      this.f['subcategory'].disable();
      this.f['subcategory'].removeValidators(Validators.required);
    }
  }
  get f() {
    return this.form.controls;
  }


  submit() {
    this.contactService.update(this.id, this.form.value).subscribe((result: any) => {
      console.log('Contact has been updated');
      this.router.navigateByUrl('contactlist/index');
    })
  }

}
