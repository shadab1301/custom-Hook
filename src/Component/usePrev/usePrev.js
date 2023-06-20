import React, { useEffect, useRef, useState } from 'react'

const usePrev = (value) => {
    let ref=useRef(value)
    useEffect(()=>{
        ref.current=value
    },[value])
    return ref.current

}

export default usePrev