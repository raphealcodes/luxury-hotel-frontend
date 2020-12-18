import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RoomsDTO} from '../../models/room-models';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../module-store';
import {CreateRooms} from '../module-store/action';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
   roomForm: FormGroup;
  constructor(private fb: FormBuilder, private route: Router, private store: Store<AppState>) {
     this.roomForm = this.fb.group({
       room: ['', Validators.required],
       cost: ['', Validators.required]
     });
  }

  SubmitRoomForm(): void {
    const {room, cost} = this.roomForm.value;
    const data: RoomsDTO = {
      room,
      cost
    };
    this.store.dispatch(new CreateRooms(data));
    this.route.navigate(['/hotel-management/view-rooms']);
  }

  ngOnInit(): void {
  }

}
