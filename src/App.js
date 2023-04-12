import React, { useState } from 'react';
import { Provider } from 'react-redux';

// react-toolkit
import store from './store'
import Counter2 from './components/Counter2';
import Posts2 from './components/Posts2';
import Posts3 from './components/Posts3';

const App = () => {
  const [isClicked, setIsClicked] = useState()

  return (
    <Provider store={store}>
      {/* <Counter2 />
      <Posts2 /> */}
      <button type="button" onClick={() => setIsClicked(!isClicked)}>
        보이게하기
      </button>
      {isClicked ? <Posts3 /> : null}
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