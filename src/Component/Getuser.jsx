import React, { useEffect, useState } from 'react'
const avatarStyle={
    width:"200px",
    height:"200px",
    borderRadius:"50%"
}
const Getuser = ({userName}) => {
    const [user,setUser]=useState(null)
    const [isError,setIsError]=useState(null)
    const [isLoading,setIsLoading]=useState(false)

useEffect(()=>{
        fetchData()
},[userName])

    const fetchData=async()=>{
        try{
            setIsLoading(true)
            const response=await fetch(`https://api.github.com/users/${userName}`)
            const responseData=await response.json()
            console.log(responseData)
            setUser(responseData)
            setIsLoading(false)
        }catch(err){
            setIsError(err.message)
            setIsLoading(false)
        }
    }
    console.log(user)
  return (
    <>
       <h3>User details of {userName}</h3>

       {isLoading && <h2>Loading...</h2>}
       {isError && <h2>{isError}</h2>}

       <ul style={{listStyle:"none"}}>
        {/* <li className="lestItem"><img style={avatarStyle} src={user?.avatar_url} alt=""  className="avatar" /></li> */}
        {/* <li className="lestItem">name : {user.name}</li>
        <li className="lestItem">public_repos : {user.public_repos}</li>
        <li className="lestItem">followers :  {user.followers}</li>
        <li className="lestItem">followers_url :  {user.followers_url}</li>
        <li className="lestItem">following :  {user.following}</li>
        <li className="lestItem">url :  {user.url}</li> */}
       </ul>
    
    </>
 
  )
}
// const OptimisedGetuser=React.memo(Getuser)
export default React.memo(Getuser)