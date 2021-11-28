import { PaymentFormComponent } from './../../shared/components/payment-form/payment-form.component';
import { PeriodicElementService } from './services/periodic-element/periodic-element.service';
import { PeriodicElement } from './interfaces/PeriodicElement';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-example-using-shared',
  templateUrl: './example-using-shared.component.html',
  styleUrls: ['./example-using-shared.component.scss']
})
export class ExampleUsingSharedComponent implements OnInit {

  dataSource: PeriodicElement[];
  displayedColumns: string[];

  constructor(
    private _periodicElement: PeriodicElementService,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    this.dataSource = this._periodicElement.getPeriodicElements();
  }

  openPaymentForm(): void {
    this._dialog.open(PaymentFormComponent, {
      width: '100%'
    });
  }
}
