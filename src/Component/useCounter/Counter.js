import React from 'react'
import useCounter from './useCounter';
import "./counter.module.css"

const Counter = () => {
    const { value, increment, decrement } = useCounter(0);
    return (
      <>
        <div className="container">
          <h1>useCounter (Custom Hook)</h1>
          <div className="DispalyContainer">
            <h1 className="currentValue">Value : {value}</h1>
          </div>
  
          <div className="counterContainer">
            <button onClick={decrement}>Decrement</button>
            <span>{}</span>
            <button onClick={increment}>Increment</button>
          </div>
        </div>
      </>
    );
}

export default Counter