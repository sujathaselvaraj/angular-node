import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid-report',
  templateUrl: './covid-report.component.html',
  styleUrls: ['./covid-report.component.css']
})
export class CovidReportComponent implements OnInit {
  customerModel: any;


  constructor() {
    console.log("customer Form Loaded")
  }

  ngOnInit(): void {
    this.customerModel = {
      firstName: '',
      aadharNumber: ''
    }
  }
  saveCustomer(customerFormGroup: any) {
    if (customerFormGroup.valid) {
      console.log(customerFormGroup.value);
    }
  }
}

