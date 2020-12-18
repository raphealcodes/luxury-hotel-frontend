import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {RoomsRO} from '../../models/room-models';
import {HotelAction, HotelActionTypes} from './action';
import {CustomerState, RoomState} from './index';
import {CustomerRO} from '../../models/customer-models';


const roomAdapter: EntityAdapter<RoomsRO> = createEntityAdapter<RoomsRO>();
const defaultState: RoomState = {
    selectId: null,
    loaded: false,
    loading: false,
    ids: [],
    entities: {}
}

const roomInitialState = roomAdapter.getInitialState(defaultState);
export const roomReducer: (state: RoomState, action: HotelAction) => RoomState = (state = roomInitialState, action: HotelAction) => {
    switch (action.type) {
        case HotelActionTypes.LOAD_ROOMS: {
            return {...state, loading: true, loaded: false};
        }
        case HotelActionTypes.LOAD_ROOMS_SUCCESS: {
            return roomAdapter.setAll(action.payload, {...state, loading: false, loaded: true});
        }
      case HotelActionTypes.CREATE_ROOMS: {
        return {...state, loading: true, loaded: false};
      }
      case HotelActionTypes.CREATE_ROOMS_SUCCESS: {
        return roomAdapter.addOne(action.payload, {...state, loading: false, loaded: true});
      }
      default:
            return state;
    }
}


const customerAdapter: EntityAdapter<CustomerRO> = createEntityAdapter<CustomerRO>();
const defaultCustomerState: CustomerState = {
  ids: [],
  entities: {},
  selectId: null,
  loading: false,
  loaded: false
};

const initialCustomerState = customerAdapter.getInitialState(defaultCustomerState);
export const customerReducer: (state: CustomerState, action: HotelAction) => CustomerState =
  (state = initialCustomerState, action: HotelAction) => {
    switch (action.type) {
      case HotelActionTypes.LOAD_CUSTOMERS:
        return {...state, loading: true, loaded: false};
      case HotelActionTypes.LOAD_CUSTOMERS_SUCCESS:
        return customerAdapter.setAll(action.payload, {...state, loading: false, loaded: true});
      case HotelActionTypes.CREATE_CUSTOMERS:
        return {...state, loading: true, loaded: false};
      case HotelActionTypes.CREATE_CUSTOMERS_SUCCESS:
        return customerAdapter.addOne(action.payload, {...state, loaded: true, loading: false});
      default:
        return state;
    }
  }


export const getRooms = roomAdapter.getSelectors().selectAll;
export const getCustomers = customerAdapter.getSelectors().selectAll;
