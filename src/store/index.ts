import { createStore } from 'redux';
import { IState, initState } from './IState';
import IAction from './IAction';
import {
  ADD_COUNT,
  REDUCE_COUNT
} from './actionTypes';

function reducer(state: IState = initState, action: IAction) {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        count: action.count,
      };

    default:
      return state;
  }
}
