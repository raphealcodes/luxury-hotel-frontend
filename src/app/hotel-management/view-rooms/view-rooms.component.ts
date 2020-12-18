import {OnInit, AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {AppState, getAllRooms} from '../module-store';
import {Store} from '@ngrx/store';
import {LoadRooms} from '../module-store/action';
import {RoomsRO} from '../../models/room-models';

@Component({
  selector: 'app-view-rooms',
  templateUrl: './view-rooms.component.html',
  styleUrls: ['./view-rooms.component.css']
})
export class ViewRoomsComponent implements OnInit, AfterViewInit {
  Rooms: any;
  displayedColumns: string[] = ['room', 'cost'];
  dataSource: MatTableDataSource<RoomsRO>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private store: Store<AppState>) {
  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.store.dispatch(new LoadRooms());
    this.store.select(getAllRooms).subscribe(
      data => this.roomsEmit(data)
    );
  }


  roomsEmit(data): void {
    this.Rooms = data;
    this.dataSource = new MatTableDataSource<RoomsRO>(data);
    this.dataSource.paginator = this.paginator;
  }
}

