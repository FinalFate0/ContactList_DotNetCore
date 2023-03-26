import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { ContactService } from '../contact.service';
import { SubcategoryService } from '../subcategory.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form!: FormGroup;


  constructor(public contactService: ContactService,
    public categoryService: CategoryService,
    public subcategoryService: SubcategoryService,
    private router: Router) { }

  ngOnInit(): void {
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

  get f() {
    return this.form.controls;
  }


  submit() {
    console.log(this.form.value);
    var formValues = this.form.value;
    formValues['category'] = this.f['category'].value
    formValues['subcategory'] = this.f['subcategory'].value
    formValues['phoneNumber'] = String(formValues['phoneNumber'])

    this.categoryService.findByName(formValues['category']).subscribe((result: Category) => {
      formValues['category'] = result;
      formValues['categoryId'] = result['id'];
      
      if (formValues['subcategory'] != '') {
        this.subcategoryService.findByName(formValues['subcategory']).subscribe((found: Category) => {
          if (!found) {
            this.subcategoryService.add(formValues['subcategory']).subscribe((added: Category) => {
              formValues['subcategory'] = added;
              this.addContact();

            });
          } else {
            formValues['subcategory'] = found;
            this.addContact();
          }
        });
      } else {
        formValues['subcategory'] = null;
        this.addContact();
      }
    });
  }

  addContact() {
    this.contactService.add(this.form.value).subscribe((result: any) => {
      console.log('New contact has been added');
      this.router.navigateByUrl('contactlist/index');
    });
  }

}
