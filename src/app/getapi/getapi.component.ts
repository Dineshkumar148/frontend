import { Component, OnInit, inject } from '@angular/core';
import { CustomerService } from '../services/customer-service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-getapi',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './getapi.component.html',
  styleUrl: './getapi.component.css',
})
export class GetApiComponent implements OnInit {
  customerDetails: any;
  #customerService = inject(CustomerService);

  ngOnInit(): void {
    this.getCustomerApi();
  }

  async getCustomerApi() {
    try {
      const res = await this.#customerService.getCustomers();
      if (res) {
        this.customerDetails = res;
      }
    } catch (error) {
      console.log('Failed to Fetch List');
    }
  }
}
