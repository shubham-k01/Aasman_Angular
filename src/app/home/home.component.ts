import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from "../add-customer/add-customer.component";

@Component({
  standalone:true,
  selector: 'app-home',
  imports: [RouterLink, CommonModule, AddCustomerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customers: any[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }
}
