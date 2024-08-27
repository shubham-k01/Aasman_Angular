import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
// Import other modules as needed

@NgModule({
  declarations: [
    AppComponent,
    // Declare other components here
    AddCustomerComponent,
    DeleteCustomerComponent,
    ErrorComponent,
    HomeComponent,
    UpdateCustomerComponent
  ],
  imports: [
    BrowserModule,
    // Import other modules here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
