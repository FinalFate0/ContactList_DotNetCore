import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  // sets URL paths for all components;
  //'localhost:4200' and 'localhost:4200/contactlist' both redirect to the index page
  { path: '', redirectTo: 'contactlist/index', pathMatch: 'full' },
  { path: 'contactlist', redirectTo: 'contactlist/index', pathMatch: 'full' },
  { path: 'contactlist/index', component: IndexComponent },
  { path: 'contactlist/:contactId/view', component: ViewComponent },
  { path: 'contactlist/add', component: AddComponent },
  { path: 'contactlist/:contactId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactlistRoutingModule { }
