import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from '../../../userStore/states/app.state';
import { GetConfig } from '../../../userStore/actions/config.actions';
import { selectConfig } from '../../../userStore/selectors/config.selector';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {
  title = 'User Credit';
  config$ = this._store.pipe(select(selectConfig));

  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
    this._store.dispatch(new GetConfig());
  }
}

