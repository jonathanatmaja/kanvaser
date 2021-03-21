import {homeActionTypes} from '../../action-types';

const {SET_LIST_MENU} = homeActionTypes;

const initialState = {
  menu: [],
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case SET_LIST_MENU:
      return {...state, menu: payload};
    default:
      return state;
  }
};
