import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 200,
        flexDirection: "column",
      }}
    >
      <h3>Value: {number}</h3>
      <div
        style={{ display: "flex", width: 250, justifyContent: "space-between" }}
      >
        <button onClick={() => setNumber(number - 1)}>Subtract</button>
        <button onClick={() => setNumber(0)}>Reset</button>
        <button onClick={() => setNumber(number + 1)}>Add</button>
      </div>
    </div>
  );
};

export default Counter;
