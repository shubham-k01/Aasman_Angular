import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { FormsModule } from '@angular/forms';
import { Customer } from '../models/customer.model';

@Component({
  standalone: true,
  selector: 'app-update-customer',
  imports: [FormsModule],
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customer: Customer = { name: '', email: '' };
  id: any;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +!this.route.snapshot.paramMap.get("id") | 0;
    this.customerService.getCustomers().subscribe(customers => {
      this.customer = customers.find(c => c.id === this.id);
    });
  }

  updateCustomer(): void {
    this.customerService.updateCustomer(this.id, this.customer).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
