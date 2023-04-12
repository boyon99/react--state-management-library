import React from 'react';
import { Provider } from 'react-redux';
import store from './modules'
import CounterContainer from './containers/CounterContainer';
import UserContainer from './containers/UserContainer';

const App = () => {
  return (
    <Provider store={store}>
      <CounterContainer />
      <UserContainer />
    </Provider>
  );
};

export default App;