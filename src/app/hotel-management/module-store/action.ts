import {Action} from '@ngrx/store';
import {RoomsDTO, RoomsRO} from '../../models/room-models';
import {CustomerDTO, CustomerRO} from '../../models/customer-models';


export enum HotelActionTypes {

    LOAD_ROOMS = '[Hotel] Load Rooms',
    LOAD_ROOMS_SUCCESS = '[Hotel] Load Rooms Success',


    CREATE_ROOMS = '[Hotel] Create Rooms',
    CREATE_ROOMS_SUCCESS = '[Hotel] Create Rooms Success',


    LOAD_CUSTOMERS= '[Hotel] Load Customer',
    LOAD_CUSTOMERS_SUCCESS = '[Hotel] Load Customer Success',


    CREATE_CUSTOMERS = '[Hotel] Create Customer',
    CREATE_CUSTOMERS_SUCCESS = '[Hotel] Create Customer Success',


}




export class LoadRooms implements Action {
      readonly type = HotelActionTypes.LOAD_ROOMS;
}


export class LoadRoomsSuccess implements Action {
    readonly type = HotelActionTypes.LOAD_ROOMS_SUCCESS;
    constructor(public payload: RoomsRO[]){}
}

export class CreateRooms implements Action {
  readonly type = HotelActionTypes.CREATE_ROOMS;
  constructor(public payload: RoomsDTO) {
  }
}

export class CreateRoomsSuccess implements Action {
  readonly type = HotelActionTypes.CREATE_ROOMS_SUCCESS;
  constructor(public payload: RoomsRO) {
  }
}


export class LoadCustomers implements Action {
  readonly type = HotelActionTypes.LOAD_CUSTOMERS;
}


export class LoadCustomersSuccess implements Action {
  readonly type = HotelActionTypes.LOAD_CUSTOMERS_SUCCESS;
  constructor(public payload: CustomerRO[]){}
}

export class CreateCustomers implements Action {
  readonly type = HotelActionTypes.CREATE_CUSTOMERS;
  constructor(public payload: CustomerDTO) {
  }
}

export class CreateCustomersSuccess implements Action {
  readonly type = HotelActionTypes.CREATE_CUSTOMERS_SUCCESS;
  constructor(public payload: CustomerRO) {
  }
}



export type HotelAction = LoadRooms | LoadRoomsSuccess | CreateRooms | CreateRoomsSuccess |
                          LoadCustomers | LoadCustomersSuccess | CreateCustomers | CreateCustomersSuccess;
