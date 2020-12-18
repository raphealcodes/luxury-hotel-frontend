import {EntityState} from '@ngrx/entity';
import { RoomsRO } from '../../models/room-models';
import * as Store from '../../../app/app.module';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import { errorReducer } from '../../state/app-reducer';
import { routerReducer } from '@ngrx/router-store';
import {customerReducer, getCustomers, getRooms, roomReducer} from './reducer';
import {CustomerRO} from '../../models/customer-models';



export interface RoomState extends EntityState<RoomsRO> {

    selectId: string | null;
    loading: boolean;
    loaded: boolean;
}

export interface CustomerState extends EntityState<CustomerRO>{
  selectId: string | null;
  loading: boolean;
  loaded: boolean;
}


export interface AppState extends Store.AppState {
   rooms: RoomState;
   customer: CustomerState;
}


export const HotelReducer: ActionReducerMap<AppState> = {
    error: errorReducer,
    route: routerReducer,
    rooms: roomReducer,
   customer: customerReducer
}


export const getFeature = createFeatureSelector<AppState>('hotel');
export  const getAllR = createSelector(getFeature, (state: AppState) => state.rooms);
export  const getAllC = createSelector(getFeature, (state: AppState) => state.customer);


export const getAllRooms = createSelector(getAllR, getRooms);
export const getAllCustomers = createSelector(getAllC, getCustomers);
