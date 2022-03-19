import React, { useReducer } from 'react'
import usageReducer from './UseReducer'


const initialState = {
    value:0,
    color: 'red'
}


                                        // USE REDUCER have two arguments --1. reducer fn. 2. inital value as object.
                                        //PURE FUNCTION -- its output depends only input. its not Global
function Usage() {
                                        //REDUCER(its a function. its a PURE FUNCTION its not declare inside main function. u can use outside the fn as extra fn or extra component.)
    const [state, dispatch] = useReducer(usageReducer, initialState) //(two state in one declaration using object in useReducer)
    //state varaible have two properys -- value & color


  return (
    <div className=''>
        <div  style={{backgroundColor:state.color, width:'10rem'}}>
        <h1 style={{color:'#A0A0A0'}}>{state.value}</h1>

        </div>


        <button onClick={()=>{

            //dispacth is USEREDUCER FUNCTION. its passing action
            dispatch(

                //action is passing is object. 1. type, 2. payload(value)
                { type: 'change-value',
                payload: 1}
            )
          

        }}>
            <h6>+</h6></button>&nbsp;&nbsp;&nbsp;&nbsp;


        <button onClick={()=>{
            dispatch(
                { type: 'change-value',
                payload: -1}
            )
          

        }}>-</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <br /> <br />

        <button onClick={()=>{
            dispatch(
                { type: 'change-color',
                payload: 'red'}
            )
          

        }}>RED</button>&nbsp;&nbsp;&nbsp;&nbsp;


        <button onClick={()=>{
            dispatch(
                { type: 'change-color',
                payload: 'blue'}
            )
          

        }}>BLUE</button>&nbsp;&nbsp;&nbsp;&nbsp;



    </div>
  )
}

export default Usage