import React from 'react';
import Navigator from './navigator';
import {Provider} from 'react-redux';
import configureStore from './redux/store';
import {MyStatusBar} from './components/index';
import {colors} from './utilities';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <MyStatusBar backgroundColor={colors.primary} />
      <Navigator />
    </Provider>
  );
};

export default App;
