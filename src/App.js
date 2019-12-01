import React from 'react';
import ComponentA from './components/ComponentA';

export const UserContext = React.createContext();

function App() {
  return (
    <div>
        <ComponentA />
    </div>
  );
}

export default App;