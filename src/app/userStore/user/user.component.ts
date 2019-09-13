import { Component, OnInit } from '@angular/core';

import { GetUsers } from '../actions/user.actions';
import { IAppState } from '../states/app.state';
import { select, Store } from '@ngrx/store';
import { selectUserList } from '../selectors/user.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  title = 'Users';
  users$ = this._store.pipe(select(selectUserList));

  constructor(private _store: Store<IAppState>, private _router: Router) { }

  ngOnInit() {
    this._store.dispatch(new GetUsers());
  }
  nevigateToUser(id: number) {
    this._router.navigate(['user', id]);
  }
}
