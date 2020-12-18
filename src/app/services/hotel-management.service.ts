import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {RoomsDTO, RoomsRO} from '../models/room-models';
import {Observable} from 'rxjs';
import {CustomerDTO, CustomerRO} from '../models/customer-models';

@Injectable({
  providedIn: 'root'
})
export class HotelManagementService {
  url: string = environment.API_URL;
  constructor(private http: HttpClient) { }


  // tslint:disable-next-line:typedef
  showRooms(): Observable<RoomsRO[]> {
    return this.http.get<RoomsRO[]>(`${this.url}rooms`);
  }

  addRoom(data: RoomsDTO): Observable<RoomsRO> {
    return this.http.post<RoomsRO>(`${this.url}rooms`, data);
  }


  showCustomers(): Observable<CustomerRO[]> {
    return this.http.get<CustomerRO[]>(`${this.url}customer`);
  }

  addCustomer(data: CustomerDTO): Observable<CustomerRO> {
    const realData: CustomerDTO = {
      name: data.name,
      address: data.address
    };
    const id = data.roomid;
    return this.http.post<CustomerRO>(`${this.url}customer/customer/${id}`, realData);
  }
}
