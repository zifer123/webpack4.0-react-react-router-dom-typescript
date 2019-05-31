import * as actionTypes from './actionTypes';
import IAction from './IAction';
import { IState } from "./IState";

export default {
  [actionTypes.ADD_COUNT]: (state: IState, action: {
    count: number
  }) => {
    return {
      ...state,
      count: action.count
    }
  },
  [actionTypes.REDUCE_COUNT]: (state: IState, action: {
    count: number
  }) => {
    return {
      ...state,
      count: action.count
    }
  }
}
