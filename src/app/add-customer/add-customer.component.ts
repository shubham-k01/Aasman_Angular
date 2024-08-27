import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { FormsModule } from '@angular/forms';
import { Customer } from '../models/customer.model';

@Component({
  standalone:true,
  selector: 'app-add-customer',
  imports:[FormsModule],
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  customer: Customer = { name: '', email: '' };

  constructor(private customerService: CustomerService, private router: Router) { }

  addCustomer(): void {
    this.customerService.addCustomer(this.customer).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
