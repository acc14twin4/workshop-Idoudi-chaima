import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-invoice',
  templateUrl: './main-invoice.component.html',
  styleUrls: ['./main-invoice.component.css']
})
export class MainInvoiceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
goToInvoice(){
  this.router.navigate(["/invoice"]);
}
}
