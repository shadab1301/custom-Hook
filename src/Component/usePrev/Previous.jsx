import React from 'react';

const Previous = () => {
  const { currValue, prevValue, increment, decrement } = {};
  return (
    <>
      <div className="container">
        <h1>useCounter (Custom Hook)</h1>
        <div className="DispalyContainer">
          <h1 className="currentValue">Current Value : {currValue}</h1>
          <h1 className="previousValue">Previous Value : {prevValue}</h1>
        </div>

        <div className="counterContainer">
          <button onClick={decrement}>Decrement</button>
          <span>{}</span>
          <button onClick={increment}>Increment</button>
        </div>
      </div>
    </>
  );
};

export default Previous;
