import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-home-screen',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './home-screen.html',
  styleUrl: './home-screen.css',
  animations:[
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateY(-10px)'}),
        animate('0.6s ease-out', style({opacity: 1, transform: 'translateY(0)'}))  
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
