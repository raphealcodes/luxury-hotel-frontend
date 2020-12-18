import { RoomsRO } from './room-models';

export interface CustomerDTO {
    name: string;
    address: string;
    roomid?: string;
}

export interface CustomerRO {
    id: string;
    created: Date;
    name: string;
    address: string;
    room?: RoomsRO ;
    update?: Date;
}
