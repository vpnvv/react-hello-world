import React from "react";

function UseReducer(state, action) {

    //4 actions in DISPACTH() function. so using switcth case.
  switch (action.type) {
    case "change-value":
      return {
          //return in all STATES using dot operator.
        ...state,
        //the state's total value + action value, assiagned a varaible as (value) 
        value: state.value + action.payload
      };
    case "change-color":
      return {
        ...state,
        color:  action.payload
      };

    default:
      break;
  }
}

export default UseReducer;


// USEREDUCER FOR:
//1. comples state managment

//2. update state from child

//3.patern diffrent from useState

//4. pattern same as REDUX
