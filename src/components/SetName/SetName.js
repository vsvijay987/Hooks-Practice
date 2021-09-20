import React, { useState, useRef } from "react";

const SetName = () => {
  let [name, setName] = useState("Vijay");

  let nameRef = useRef();

  const submitButton = () => {
    setName(nameRef.current.value);
  };
  return (
    <div className="App">
      <p>{name}</p>

      <div>
        <input ref={nameRef} type="text" />
        <button onClick={submitButton}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default SetName;
