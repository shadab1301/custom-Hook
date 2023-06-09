import React, { useState } from 'react'
import Getuser from './Getuser'
const inputStyle={
    padding:"10px 20px",
    width:"400px"
}

const User = () => {
   const [userName,setUserName]= useState("")

  return (
    <>
        <h1>User</h1>

        <div>
            <form>
                <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} style={inputStyle} name="userName" placeholder='Username' />
            </form>

            {userName ?  <Getuser userName={userName}/> :<>
                <p className="text">Please type username to initiate searching...</p>
            </>}
          
        </div>
    
    </>
  )
}

export default User