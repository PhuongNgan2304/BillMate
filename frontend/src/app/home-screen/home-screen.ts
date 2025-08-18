import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';
import { InvoiceSidebar } from './sub-components/invoice-sidebar/invoice-sidebar';
import { InvoiceSection } from './sub-components/invoice-section/invoice-section';
@Component({
  selector: 'app-home-screen',
  imports: [CommonModule, InvoiceSidebar, InvoiceSection],
  standalone: true,
  templateUrl: './home-screen.html',
  styleUrl: './home-screen.css',
    animations:[
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateY(-10px)'}),
        animate('0.6s ease-out', style({opacity: 1, transform: 'translateY(0)'}))  
      ])
    ]),

    trigger('fadeAnimation', [
      transition(':enter',[
        style({opacity: 0}),
        animate('300ms ease-in-out', style({opacity: 1})),
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('300ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class HomeScreen {
  authButtons = false;

  activeTab: string = 'invoices';// default tab

  activeFunction: string = 'readInvoices'; // default function

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  setActiveFunction(func: string) {
    this.activeFunction = func;
  }



  constructor(private router: Router) {}

  ngOnInit(): void {
    if(this.router.url === '/home'){
      this.authButtons = true;
    }
  }
}
