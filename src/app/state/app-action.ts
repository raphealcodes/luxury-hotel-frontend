import {Action} from '@ngrx/store';


export enum ErrorActionTypes  {
    Add_Error = '[Error] Add Error',
    Remove_Error = '[Error] Remove Error'
}

export class AddError implements Action {
    readonly type = ErrorActionTypes.Add_Error;
    constructor(public payload: any) {
    }
}

export class RemoveError implements Action{
    readonly type = ErrorActionTypes.Remove_Error;
 }



export type ErrorAction = AddError | RemoveError;
