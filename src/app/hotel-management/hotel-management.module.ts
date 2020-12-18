import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelManagementComponent } from './hotel-management.component';
import { ViewRoomsComponent } from './view-rooms/view-rooms.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { RouterModule, Routes } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { StoreModule } from '@ngrx/store';
import {HotelReducer} from './module-store';
import {EffectsModule} from '@ngrx/effects';
import {HotelEffect} from './module-store/effects';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/register-customer',
    pathMatch: 'full'
  },
  {
    path: 'add-room',
    component: AddRoomComponent
  },
  {
       path: 'view-rooms',
       component: ViewRoomsComponent
  },
  {
    path: 'view-customers',
    component: ViewCustomersComponent
  },
  {
    path: 'register-customer',
    component: RegisterCustomerComponent
  }

];

@NgModule({
  declarations: [HotelManagementComponent,
                 ViewRoomsComponent,
                 ViewCustomersComponent,
                 RegisterCustomerComponent,
                 AddRoomComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('hotel', HotelReducer),
    EffectsModule.forFeature([HotelEffect])
  ],
  exports: [RouterModule]
})
export class HotelManagementModule { }
