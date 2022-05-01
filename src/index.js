import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, legacy_createStore} from "redux"
import {Provider} from "react-redux"
import thunk from 'redux-thunk';

import { Change_Name, Change_surName } from './constant/Constant';
import { ChangeNameActionCreator } from './action Creator/ActionCreator';

// let create initialState in object

let initialState ={
  name:"Ritik Patidar"
}
//lets create rootReducer Function
let rootReducer =(oldState,action)=>{
  let newState = oldState; 
  switch(action.type){
    case Change_Name:
      return{
        ...newState,
        name :"Anurag Sharma"
      }
    case Change_surName:
      return{
        ...newState,
        name:"vijay Sharma"
      }
      default:
        return{
          ...newState
        }
  }

}
//lets create async funtion
export const MyAsyncAction = () =>{ 
  console.log("okok");  // async function are return async function
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch(ChangeNameActionCreator());
    },2000)
     
      
  
  
    
  }
}
//lets create a store object

let store = legacy_createStore(rootReducer,initialState,applyMiddleware(thunk))
console.log(store)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

