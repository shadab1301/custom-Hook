import React from 'react'
import useFetch from './useFetch'
const baseUrl="https://jsonplaceholder.typicode.com/todos/"
const Fetch = () => {
    const {data,isLoading,isError}=useFetch(baseUrl)

    if(isLoading)return <>Loading...</>
    if(isError)return isError
  return (
    <>
     <h1>Data is coming from useFetch (Custom Hook)</h1>
        {isLoading && <>Loading...</>}
        {isError && <>{isError} </>}
        <pre>{JSON.stringify(data,undefined,2)}</pre>
    
    </>
  )
}

export default Fetch