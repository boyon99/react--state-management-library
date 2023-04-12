import React from 'react';
import { Provider } from 'react-redux';
import store from './modules'
import CounterContainer from './containers/CounterContainer';

const App = () => {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
};

export default App;