import React, { useState } from 'react'

const useCounter = (initialValue) => {
   const [value,setValue]=useState(initialValue)
   const increment=()=>{
    setValue(value+1)
   }
   const decrement=()=>{
    setValue(value-1)
   }
  return ({ value, increment, decrement })
}

export default useCounter