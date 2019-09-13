import { Action } from '@ngrx/store'
import { Tutorial } from './../../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions'

// Section 1
const initialState: Tutorial = {
  name: 'NanJing University',
  url: 'https://www.nju.edu.cn/en/main.psp'
}

// Section 2
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

  // Section 3
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];
    case TutorialActions.REMOVE_TUTORIAL:
      state.forEach((item, index) => {
        if (item.name === action.payload.name && item.url === action.payload.url) state.splice(index, 1);
      });
      return state;
    default:
      return state;
  }
}
