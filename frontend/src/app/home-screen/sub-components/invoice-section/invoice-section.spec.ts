import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceSection } from './invoice-section';

describe('InvoiceSection', () => {
  let component: InvoiceSection;
  let fixture: ComponentFixture<InvoiceSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
