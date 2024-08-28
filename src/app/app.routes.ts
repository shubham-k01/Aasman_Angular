import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'add', component: AddCustomerComponent },
    { path: 'update/:id', component: UpdateCustomerComponent },
    { path: 'delete/:id', component: DeleteCustomerComponent },
    { path: '**', component: ErrorComponent }
  ];


  
