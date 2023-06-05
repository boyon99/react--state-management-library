# reudx

## vanila-redux

[vanila-redux](https://codesandbox.io/s/vanilla-js-redux-5cc8ez)

## react-redux

- `yarn add react-redux redux`

### Container Presenter/파일 구분 방식을 통해 카운터 구현하기

> https://github.com/boyon99/redux/commit/85d30999f1e3a84c8b063edc1c236d8610db2908 > https://github.com/boyon99/redux/commit/a38656db508a30eb000a79a240bbf64df4c8c2b1

### Container Presenter/ducks 패턴을 통해 카운터 구현하기

> https://github.com/boyon99/redux/commit/82337cad8719e6653c075a5b88dbee2834d14d44

### Container Presenter/ducks 패턴을 통해 리덕스 여러개 구현하기

> https://github.com/boyon99/redux/commit/43934f2b4b8c2f910b438e504c6a7c5acbdc6829

### Redux Middleware

- `yarn add redux-logger --dev`
  redux 로 실행되는 로직에 대해서 logging, 즉 콘솔창에 기록을 남겨주는 역할을 담당하는 리덕스 미들웨어이다.
- redux devtools
  크롬에서 redux 전용 개발자 도구를 활용할 수 있도록 해줍니다
- `yarn add redux-persist`
  redux 로 관리하는 상태 값을 브라우저에 저장해놓고, 새로고침 후에도 해당 값을 불러와서 사용할 수 있도록 도와주는 라이브러리입니다.

> https://github.com/boyon99/redux/commit/db47f7f22657b660abbcb34cf5df166d83731735

- `yarn add redux-thunk`
  리덕스에서 비동기 작업을 처리할 수 있도록 도와주는 미들웨어입니다. 정확히 말하자면, 해당 미들웨어를 사용하면 액션 객체가 아니라 함수 그 자체를 디스패치할 수 있도록 해줍니다.

> https://github.com/boyon99/redux/commit/a57f7a5851f0f4e14b946ea4d3c103efd334b539

## react-toolkit

`**Redux Toolkit**` 은 기존에 Redux 외에 설치해야 했던 각종 패키지 기능을 통합해서, 조금 더 간편하게 Redux 기능을 사용할 수 있도록 도와주는 모듈입니다.

기본적으로 비동기 작업을 위한 thunk, saga 관련 기능이 내장되어 있고, 액션을 간편하게 명시하기 위한 redux-actions 관련 기능 또한 내장되어 있습니다.

그래서 요약하자면, Redux Toolkit 을 사용하면

1. **코드의 간소화**
2. **패키지의 간소화**

```jsx
yarn add @reduxjs/toolkit react-redux
```

> https://github.com/boyon99/redux/commit/7af8bf04b0bb3abe242ba1020c18f01f9bc3ba20

### Create Async Thunk 사용해보기

> https://github.com/boyon99/redux/commit/2465bd954770c1d08948e42f7a3e4afe3e48de15

### RTK Query 사용해보기

react-query와 유사하다. 캐싱 기능을 지원한다.

- .env파일 작성하기
  `import.meta.env.VITE_SERVER_URL`로 해당 주소값을 가져올 수 있다.

> https://github.com/boyon99/redux/commit/d250cfeae30219b7c98bf52478f226b1873bf723

- Tag 활용하여 POST 요청 후 바로 GET 요청하기

> https://github.com/boyon99/redux/commit/5a321e6be55dfa6e61311088f9df3be1017c7afc


```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";

// redux
// import { Provider } from 'react-redux';

// 리덕스 미들웨어
// import { composeWithDevTools } from 'redux-devtools-extension';
/** 
import { applyMiddleware, legacy_createStore, compose } from '@reduxjs/toolkit';
import logger from 'redux-logger';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import rootReducer from './17/modules'
const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(logger)))
*/
// import store from './shop/store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </Provider>
);
```
