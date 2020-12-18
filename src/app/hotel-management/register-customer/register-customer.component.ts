import { Component, OnInit } from '@angular/core';
import {AppState, getAllRooms} from '../module-store';
import {Store} from '@ngrx/store';
import {CreateCustomers, LoadRooms} from '../module-store/action';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {RoomsRO} from '../../models/room-models';
import {Router} from '@angular/router';
import {CustomerDTO} from '../../models/customer-models';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  customerForm: FormGroup;
  rooms: Observable<RoomsRO[]>;
  constructor(private store: Store<AppState>, private fb: FormBuilder, private route: Router) {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      roomid: ['', Validators.required],
    });
  }

  submitCustomerForm(): void {
    const {name, address, roomid} = this.customerForm.value;
    const data: CustomerDTO = {
      name, address, roomid
    };
    this.store.dispatch(new CreateCustomers(data));
    this.route.navigate(['/hotel-management/view-customers']);
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadRooms());
    this.rooms = this.store.select(getAllRooms);
  }

}
