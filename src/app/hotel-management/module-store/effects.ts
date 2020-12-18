import {Injectable} from '@angular/core';
import {HotelManagementService} from '../../services/hotel-management.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  CreateCustomers, CreateCustomersSuccess,
  CreateRooms,
  CreateRoomsSuccess,
  HotelActionTypes,
  LoadCustomers,
  LoadCustomersSuccess,
  LoadRooms,
  LoadRoomsSuccess
} from './action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {RoomsRO} from '../../models/room-models';
import {AddError} from '../../state/app-action';
import {CustomerRO} from '../../models/customer-models';



@Injectable()
export class HotelEffect {
  constructor(private service: HotelManagementService, private actions$: Actions) {
  }


  @Effect()
  loadrooms$: Observable<Action> = this.actions$.pipe(
    ofType<LoadRooms>(HotelActionTypes.LOAD_ROOMS),
    mergeMap((action) => {return this.service.showRooms().pipe(
      map((rooms: RoomsRO[]) => new LoadRoomsSuccess(rooms) ),
      catchError((err) => of(new AddError(err)))
    ); })
  );


  @Effect()
  createrooms$: Observable<Action> = this.actions$.pipe(
    ofType<CreateRooms>(HotelActionTypes.CREATE_ROOMS),
    mergeMap((action) => {return this.service.addRoom(action.payload).pipe(
      map((room: RoomsRO) => new CreateRoomsSuccess(room)),
      catchError((err) => of(new AddError(err)))
    ); })
  );

  @Effect()
  loadCustomer$: Observable<Action> = this.actions$.pipe(
    ofType<LoadCustomers>(HotelActionTypes.LOAD_CUSTOMERS),
    mergeMap((action) => { return this.service.showCustomers().pipe(
      map((customer: CustomerRO[]) => new LoadCustomersSuccess(customer)),
      catchError((err) => of(new AddError(err)))
    ); })
  );

  @Effect()
  createCustomer$: Observable<Action> = this.actions$.pipe(
    ofType<CreateCustomers>(HotelActionTypes.CREATE_CUSTOMERS),
    mergeMap((action) => {return this.service.addCustomer(action.payload).pipe(
      map((customer: CustomerRO) => new CreateCustomersSuccess(customer)),
      catchError((err) => of(new AddError(err)))
    ); })
  );
}


