import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { FormsModule } from '@angular/forms';
import { Customer } from '../models/customer.model';
import { map } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-update-customer',
  imports: [FormsModule],
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customer: Customer = { name: '', email: '',address:'' };
  id: any;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    // this.id = +!this.route.params.pipe(map((p) => p['id']));
    console.log('Id:',this.id);
    this.customerService.getCustomers().subscribe(customers => {
      this.customer = customers.find(c => c.id === this.id);
    });
  }

  updateCustomer(): void {
    console.log('hi');
    
    this.customerService.updateCustomer(this.id, this.customer).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
