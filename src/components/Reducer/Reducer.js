import React, { useReducer } from "react";

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + action.value };
    case "decrement":
      return { counter: state.counter - action.value };
    case "reset":
      return initialState;
    case "default":
      return state;
  }
};

const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{marginLeft: "600px", marginTop: "100px"}}>
      <div>Count-{count.counter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Reducer;
