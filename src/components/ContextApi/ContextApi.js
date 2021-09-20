import React, { useContext } from "react";
import { context } from "../../App";

const ContextApi = () => {
  const myContextVal = useContext(context);

  const increment = () => {
    myContextVal.setValue(myContextVal.value + 1);
  };
  return (
    <div style={{ marginTop: "100px", marginLeft: "400px" }}>
      <button onClick={increment}>increment</button>
      <div>{myContextVal.value}</div>
    </div>
  );
};

export default ContextApi;
