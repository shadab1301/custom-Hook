import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import usePrev from './usePrev';

const Previous = () => {
  // const { currValues, prevValue, increments } = {};
  const [currValue,setCurrValue]=useState(0)
  const prevValue=usePrev(currValue)
  const increment=()=>{
    setCurrValue(currValue+1)
  }

  
  return (
    <>
      <div className="container">
        <h1>useCounter (Custom Hook)</h1>
        <div className="DispalyContainer">
          <h1 className="currentValue">Current Value : {currValue}</h1>
          <h1 className="previousValue">Previous Value : {prevValue}</h1>
        </div>

        <div className="counterContainer">
          <span>{}</span>
          <button onClick={increment}>Increment</button>
        </div>
      </div>
    </>
  );
};

export default Previous;
