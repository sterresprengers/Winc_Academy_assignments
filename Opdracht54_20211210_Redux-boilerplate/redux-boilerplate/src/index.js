import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux"
import allReducers from "./reducers"
import { Provider } from 'react-redux';

const store = createStore(
  allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// BEGINNING OF EXERCISE https://www.youtube.com/watch?v=CVpUuw9XSjY&ab_channel=DevEd 

// import {createStore} from "redux" // to create STORE
// // STORE --> GLOBALIZED STATE

// // ACTION --> WHAT YOU WANT TO DO. (in this case: increment and decrement of state.counter)
// // an ACTION is a simple function that returns an object

// const increment = () => {
//   return {
//     type: "INCREMENT" // type is name for your action
//   }
// }

// const decrement = () => {
//   return {
//     type: "DECREMENT" 
//   }
// }

// // REDUCER --> HOW ACTION TRANSFORM STATE INTO NEXT STATE
// // a function (with two parameters: state + action)that returns a piece of object, 

// const counter = (state = 0, action) => {
//   switch(action.type){
//     case "INCREMENT":
//       return state + 1
//     case "DECREMENT": 
//       return state - 1 
//   }
// }

// let store = createStore(counter)

// // Display it in the console
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH --> DOES THE ACTION
// store.dispatch(increment());

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// END OF EXERCISE




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
