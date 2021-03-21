import {homeActionTypes} from '../../action-types';

const {SET_LIST_MENU} = homeActionTypes;

const setListMenu = (payload) => ({
  type: SET_LIST_MENU,
  payload,
});

export {setListMenu};
