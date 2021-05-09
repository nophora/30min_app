import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';

import Apps from './apps'

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';


const initialState = {
  navBar: false,
  level: 'Inactive',
  gender: 'male',
  selected: '',
  recent:[],
}
  
  const reducer = (state = initialState, action) => {
    console.log('actionX',action)
    switch (action.type) {
      case 'GLOBAL':
        return state = { ...state, navBar: action.payload };
      case 'GENDER':
        return state = { ...state, gender: action.payload };
      case 'LEVEL':
         return state = { ...state, level: action.payload };
       default:
         return state=state
    }
    console.log('after',state)
    return state ;
  }
  
  const store = createStore(reducer);
  





const App =()=>{
 
   

  return (
    <Provider store={store}>
     <Apps/>
      </Provider>
  );

}

export default App;

