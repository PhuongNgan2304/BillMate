import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice-sidebar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './invoice-sidebar.html',
  styleUrl: './invoice-sidebar.css'
})
export class InvoiceSidebar {
  @Input() activeFunction!: string;
  @Output() activeFunctionChange = new EventEmitter<string>();

  setActiveFunction(func: string) {
    this.activeFunctionChange.emit(func);
  }

  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
