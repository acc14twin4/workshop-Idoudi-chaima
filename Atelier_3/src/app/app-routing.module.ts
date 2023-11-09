import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';

const routes: Routes = [
  { path: "", component: InvoiceComponent },
  { path: 'facture/:id/:active', component: InvoiceComponent },
  { path: 'facture-2/:id', component: InvoiceComponent },

  { path: "invoice", component: InvoiceComponent },
  { path: "invoice-list", component: InvoiceListComponent },
  { path: "main-invoice", component: MainInvoiceComponent },
  { path: "**", component: InvoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
