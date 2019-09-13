import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Tutorial } from './../../models/tutorial.model';
import { AppState } from './../states/app.state';
import * as TutorialActions from './../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  // Section 1
  tutorials: Observable<Tutorial[]>;

  // Section 2
  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  delTutorial(tutorial) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(tutorial))
  }

  ngOnInit() {
  }

}
