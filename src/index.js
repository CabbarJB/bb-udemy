import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers,applyMiddleware,compose} from "redux";
import {Provider} from "react-redux";
import builderPageReducer from "./store/reducers/builderPage-reducer";
// const rootReducer = combineReducers()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(builderPageReducer, /* preloadedState, */ composeEnhancers())

ReactDOM.render(
    <Provider store={store}>
  <React.StrictMode>
      <App />
  </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
