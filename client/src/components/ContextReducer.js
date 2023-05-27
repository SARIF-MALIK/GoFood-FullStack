import React, { createContext, useReducer } from 'react'


const CartStateContext = createContext(); 
const CartDispatchContext = createContext(); 

export const ContextReducer = ({children})=>{
    const[state, dispatch] = useReducer();  
  return (
    <div>ContextReducer</div>
  )
}
