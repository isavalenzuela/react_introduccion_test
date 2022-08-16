import React from "react";
import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  function lessclick() {
    setCount((prevCount) => {
      return prevCount ? prevCount - 1 : 0;
    });
  }

  return (
    <div>
      <h3>This is a counter:</h3>
      <p data-testid="countId">{count}</p>
      <button data-testid="plus" onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button data-testid="less" onClick={() => lessclick()}>-</button>
    </div>
  );
}

export default Counter;