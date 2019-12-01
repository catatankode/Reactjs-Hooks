 
import React, {useReducer} from 'react';

const initialState = {
    firstCounter:0,
    secondCounter: 10
};
const reducer = (state, action) => {
    switch(action.type){
        case "INCREMENT":
            return {...state, firstCounter:state.firstCounter + action.value}
        case "DECREMENT":
            return {...state, firstCounter:state.firstCounter - action.value}
        case "SECOND_INCREMENT":
            return {...state, secondCounter:state.secondCounter + action.value}
        case "SECOND_DECREMENT":
            return {...state, secondCounter:state.secondCounter - action.value}
        case "RESET":
            return initialState
        default:
            return state
    }
}

const App = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    
    return(
        <div>
            <p> Count {count.firstCounter} <br /> 
                Count {count.secondCounter}
            </p>
            <button onClick={() => dispatch({type: 'INCREMENT', value:1})}>Increment</button>
            <button onClick={() => dispatch({type: 'DECREMENT', value:1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'SECOND_INCREMENT', value:1})}>secondIncrement</button>
            <button onClick={() => dispatch({type: 'SECOND_DECREMENT', value:1})}>secondDecrement</button>

            <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
        </div>
    );
}

export default App;