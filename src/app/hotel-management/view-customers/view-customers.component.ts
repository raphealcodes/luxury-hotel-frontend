import {OnInit, AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Store} from '@ngrx/store';
import {AppState, getAllCustomers} from '../module-store';
import {CustomerRO} from '../../models/customer-models';
import {LoadCustomers} from '../module-store/action';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'room', 'cost', 'time', 'date'];
  dataSource: MatTableDataSource<CustomerRO>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  Customer: CustomerRO[] = [];
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadCustomers());
    this.store.select(getAllCustomers).subscribe(
      data => this.customerEmit(data)
    );
  }

  customerEmit(data: CustomerRO[]): void {
    this.Customer = data;
    this.dataSource = new MatTableDataSource<CustomerRO>(data);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {

  }

}


