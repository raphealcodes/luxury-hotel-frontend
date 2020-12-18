import { CustomerRO } from './customer-models';

export interface RoomsDTO {
    room: string;
    cost: number;
}

export interface RoomsRO {
    id: string;
    created: Date;
    room: string;
    cost: number;
    update: Date;
    customer?: CustomerRO[];
}
