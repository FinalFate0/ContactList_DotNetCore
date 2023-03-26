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
    formValues['phoneNumber'] = String(formValues['phoneNumber'])
    console.log(formValues);

    this.contactService.add(this.form.value).subscribe((result: any) => {
      console.log('New contact has been added');
      this.router.navigateByUrl('contactlist/index');
    });
  }

}
