import { Route, Routes, Link, Outlet } from "react-router-dom"
import { Card, Image, Container } from 'react-bootstrap';
import { useState, useReducer} from 'react'


const ReduxPage = () => {

    // 1. Define the reducer function
    const counterReducer=(state, action)=> {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                return state;
        }
    }

    // 2. Use it inside your component
   const [state, dispatch] = useReducer(counterReducer, { count: 0 });


    return (
        <>

            <h2>Reducer </h2>
            <div>
                <p>Count: {state.count}</p>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            </div>
        </>
    )
}
export { ReduxPage }