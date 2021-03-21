import thunk from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {reducer as i18n} from 'react-native-redux-i18n';
import {homeReducer} from './reducers';

const appReducer = combineReducers({
  i18n,
  home: homeReducer,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === 'USER_LOGGED_OUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

const configureReducer = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureReducer;
