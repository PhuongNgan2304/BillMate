import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

type Item = { description: string; unitPrice: number; qty: number };
@Component({
  selector: 'app-invoice-section',
  imports: [CommonModule, FormsModule, CurrencyPipe],
  standalone: true,
  templateUrl: './invoice-section.html',
  styleUrl: './invoice-section.css'
})
export class InvoiceSection {
  @Input() activeTab!: string;
  @Input() activeFunction!: string;

  logoUrl: string | null = null;

  invoice = {
    number: 5,
    issueDate: new Date().toISOString().slice(0, 10),
    taxPercent: 0,
    client: {
      name: '',
      address: '',
      email: '',
    },
    from: {
      name: '',
      company: '',
      address: '',
      email: '',
      phone: '',
    },
    items: <Item[]>[
      { description: '', unitPrice: 0, qty: 1 },
    ],
    payment: {
      bankName: '',
      accountNo: '',
      swiftCode: '',
      ifscCode: '',
      paypal: '',
      link: '',
    },
  };

  // --- File (logo) ---
  onLogoSelected(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => (this.logoUrl = reader.result as string);
    reader.readAsDataURL(file);
  }
  removeLogo() {
    this.logoUrl = null;
  }

  // --- Items ---
  addItem() {
    this.invoice.items.push({ description: '', unitPrice: 0, qty: 1 });
  }
  removeItem(i: number) {
    this.invoice.items.splice(i, 1);
  }
  inc(i: number) {
    this.invoice.items[i].qty++;
  }
  dec(i: number) {
    if (this.invoice.items[i].qty > 1) this.invoice.items[i].qty--;
  }

  // --- Totals ---
  get subtotal() {
    return this.invoice.items.reduce((s, it) => s + it.unitPrice * it.qty, 0);
  }
  get tax() {
    return (this.subtotal * (this.invoice.taxPercent || 0)) / 100;
  }
  get total() {
    return this.subtotal + this.tax;
    //return 20;
  }

  // --- Export to PDF ---
  exportToPDF() {
    const element = document.getElementById('invoicePreview');
    if (!element) return;
    
    html2canvas (element, {scale: 2}).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      
      //Kích thước A4
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      //Kích thước ảnh theo tỷ lệ
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let position = 0;

      // Nếu ảnh cao hơn trang, chia thành nhiều trang
      if (imgHeight > pageHeight){
        let heightLeft = imgHeight;
        while (heightLeft > 0) {
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
          if (heightLeft > 0) {
            pdf.addPage();
            position = - (imgHeight - heightLeft);
          }
        }
      } else {
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      }
      pdf.save('invoice.pdf');
    })
    
  }
  // invoice = {
  //   client: {
  //     name: '',
  //     address: '',
  //     email: ''
  //   },
  //   from: {
  //     name: '',
  //     company: '',
  //     email: '',
  //     address: ''
  //   },
  //   items: [
  //     {
  //       description: '',
  //       //date: '',
  //       unitPrice: 0,
  //       qty: 1,
  //       //discount: 0
  //       //amount: ''
  //     }
  //   ]
  // };

  // getSubtotal() {
  //   return this.invoice.items.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  // }

  // getTax() {
  //   return this.getSubtotal() * 0.1;
  // }

  // getTotal() {
  //   return this.getSubtotal() + this.getTax();
  // }

  // addItem() {
  //   this.invoice.items.push({ description: '', unitPrice: 0, qty: 1});
  // }
}
