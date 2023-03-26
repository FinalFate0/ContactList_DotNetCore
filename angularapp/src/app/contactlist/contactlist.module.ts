import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactlistRoutingModule } from './contactlist-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    ContactlistRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactlistModule { }
