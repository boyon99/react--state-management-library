import React from 'react';
import { Provider } from 'react-redux';

// react-toolkit
import store from './store'
import Counter2 from './components/Counter2';
import Posts2 from './components/Posts2';

const App = () => {
  return (
    <Provider store={store}>
      <Counter2 />
      <Posts2 />
    </Provider>
  );
};


// react-redux
// import { store, persistor } from './modules'
// import CounterContainer from './containers/CounterContainer';
// import UserContainer from './containers/UserContainer';
// import { PersistGate } from 'redux-persist/integration/react';
// import PostsContainer from './containers/PostsContainer';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <PersistGate persistor={persistor}>
//         <CounterContainer />
//         <UserContainer />
//         <PostsContainer />
//       </PersistGate>
//     </Provider>
//   );
// };


export default App;