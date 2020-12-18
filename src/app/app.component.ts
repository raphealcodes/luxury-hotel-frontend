import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.module';
import { AddError } from './state/app-action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'luxury-hotel-frontend';

  constructor(
    private store: Store<AppState>) {}
  ngOnInit() {
    this.store.dispatch(new AddError({error: 'wrong message'}));
  }
}
