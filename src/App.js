import React,{useState} from 'react';

const App = () => {
  const [state, setState] = useState({age:17, grade:12})

  const handleClick = (value) => setState({
      ...state,
      [value]:state[value] + 1
  })

  return (
    <div>
      <p>Umurku saat ini {state.age} </p>
      <p>Aku duduk di kelas {state.grade}</p>

      <div>
        <button onClick={e => handleClick('age')}>
            Umurku bertambah
        </button>
        <button onClick={e => handleClick('grade')}>
            Aku naik kelas
        </button>
      </div>
    </div>
  )
}

export default App;