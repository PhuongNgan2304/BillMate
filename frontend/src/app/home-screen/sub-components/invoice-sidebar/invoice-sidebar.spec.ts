import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceSidebar } from './invoice-sidebar';

describe('InvoiceSidebar', () => {
  let component: InvoiceSidebar;
  let fixture: ComponentFixture<InvoiceSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
