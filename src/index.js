import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './reducers/Reducers';

const saveState = (state) => {
  try {
    localStorage.setItem("TODO_ITEMS", JSON.stringify(state));
  } catch (error) {
    console.log(error);
  }
};
const loadState = () => {
  try {
    const deviceState = JSON.parse(localStorage.getItem("TODO_ITEMS"));
    if (deviceState === null) return undefined;
    return deviceState;
  } catch (error) {
    return undefined;
  }
};


const store = createStore(Reducers,loadState());
store.subscribe(()=>saveState(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
