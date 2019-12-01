# useReducer

:key: Dasar:
* **useReducer** adalah alternative untuk useState yang lebih kompleks, atau bisa disebut state management dalam Hooks.
* sintaks : `const [state, dispatch] = useReducer(reducer, initialState, lazyInitFunction)`

## Basic Reducer
>useReducer sangat mirip dengan redux.
Berbeda dengan `useState`, untuk menggunakan `useReducer` cukup panggil dengan *reducer* dan *initialState*, useReducer otomatis akan mengembalikan properti **state** dan **dispatch** *function* 
```js
...
import React, {useReducer} from 'react' // import useReducer

const initialState = (0); // untuk menginisialisaikan state

const reducer = (state, action) => {
  switch (action) {
    case 'INCREMENT':
        return state + 1
    case 'DECREMENT':
        return state - 1
    case 'RESET':
        return initialState
    default:
      return state
  }
}

const App = () => {
    const [count, dispatch] = useReducer(reducer, initialState);   
    return(
        <div>
            <p> Count {count} </p>
            <button onClick={() => dispatch('INCREMENT')}>Increment</button>
            <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
            <button onClick={() => dispatch('RESET')}>Reset</button>
        </div>
    );
}

export default App;
```

## Inisialisai State Lazy
useReducer mengambil parameter fungsi ketiga. Kita dapat menginisialisasi keadaan dari fungsi ini, dan apa pun yang dikembalikan dari fungsi ini dikembalikan sebagai objek keadaan. Fungsi ini akan dipanggil dengan initialState - parameter kedua.
```js
import React, {useReducer} from 'react' // import useReducer

const initializeState = () => ({
  count: 100
}) // untuk parameter ketiga sebagai nilai awal

const initialState = {count:0}; // untuk menginisialisaikan state
const reducer = (state, action) => {
  switch (action) {
    case 'INCREMENT':
        return {count:state.count + 1}
    case 'DECREMENT':
        return {count:state.count - 1}
    case 'RESET':
        return {count:100}
    default:
      return state.count
  }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState, initializeState);   
    return(
        <div>
            <p> Count {state.count} </p>
            <button onClick={() => dispatch('INCREMENT')}>Increment</button>
            <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
            <button onClick={() => dispatch('RESET')}>Reset</button>
        </div>
    );
}

export default App;
```

## useReducer with Complex State
```js
 
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