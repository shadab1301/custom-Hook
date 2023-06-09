import React, { useEffect, useState } from 'react';

const useGithubUser = () => {
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [userName]);

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
return {user,isError,isLoading}
};
