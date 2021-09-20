import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import SetName from "./components/SetName/SetName";
import ContextApi from "./components/ContextApi/ContextApi";
import Navbar from "./components/Navbar/Navbar";
import Reducer from "./components/Reducer/Reducer";

const initialState = 0;
export const context = React.createContext(null);

function App() {
  const [value, setValue] = useState(initialState);

  return (
    <context.Provider value={{ value, setValue }}>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={SetName} />
          <Route path="/counter" exact component={ContextApi} />
          <Route path="/reducer" exact component={Reducer} />
        </Switch>
      </div>
    </context.Provider>
  );
}

export default App;
