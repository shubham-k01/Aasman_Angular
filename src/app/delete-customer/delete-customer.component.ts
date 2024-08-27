import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-delete-customer',
  imports:[CommonModule],
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  customer: any = { name: '', email: '' };
  id: any;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +!this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomers().subscribe(customers => {
      this.customer = customers.find(c => c.id === this.id);
    });
  }

  deleteCustomer(): void {
    this.customerService.deleteCustomer(this.id).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
