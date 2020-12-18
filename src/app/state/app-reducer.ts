import {ErrorAction, ErrorActionTypes} from './app-action';


export interface ErrorState {
    error: any;
}

const initialState: ErrorState = {
    error: null
}


export const errorReducer: (state: ErrorState, action: ErrorAction) => ErrorState = (state= initialState, action: ErrorAction) => {
    switch (action.type) {
        case ErrorActionTypes.Add_Error: {
            return {...state, error: action.payload};
        }

        case ErrorActionTypes.Remove_Error: {
            return {...state, error: null};
        }

        default:
            return state;

    }
}