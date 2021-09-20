import React, { useState } from 'react';

import './App.css';
import SetName from './components/SetName/SetName';
import ContextApi from './components/ContextApi/ContextApi';

const initialState = 0;
export const context = React.createContext(null);

function App() {

  const [value, setValue] = useState(initialState);

  return (
    <context.Provider value={{ value, setValue }}>
      <div>
        {/* <SetName /> */}
        <ContextApi/>
      </div>
    </context.Provider>
  );
}

export default App;
