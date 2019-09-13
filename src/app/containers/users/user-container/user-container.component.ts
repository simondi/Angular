import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { IAppState } from '../../../userStore/states/app.state';
import { selectSelectedUser } from '../../../userStore/selectors/user.selector';
import { GetUsers } from '../../../userStore/actions/user.actions';
 
@Component({
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {
  users$ = this._store.pipe(select(selectSelectedUser));

  constructor(private _store: Store<IAppState>, private _router: Router) { }

  ngOnInit() {
    this._store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this._router.navigate(['user', id]);
  }
}
