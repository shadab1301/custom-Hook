import React,{useState,useEffect,useReducer} from 'react'

const actionConstant={
    fetchData:"fetchData",
    isLoading:"isLoading",
    isError:"isError",
}
const fetchDataAction=(data)=>{
    return {type:actionConstant.fetchData,payload:data}
}
const isLoadingAction=(data)=>{
    return {type:actionConstant.isLoading,payload:data}
}
const isErrorAction=(data)=>{
    return {type:actionConstant.isError,payload:data}
}

const initialState={
    data:[],
    isLoading:false,
    isError:null,
}
const reducer=(state,action)=>{
    switch(action.type){
        case actionConstant.fetchData : return {...state,data:action.payload}
        case actionConstant.isLoading : return {...state,isLoading:action.payload}
        case actionConstant.isError : return {...state,isError:action.payload}
        default :
         return    initialState
    }
}


const useFetch = (url) => {
const [state,dispatch] = useReducer(reducer,initialState)

useEffect(()=>{
    loadData()
},[])

const loadData=async()=>{
    // try{

    // }
    try{
        // setIsLoading(true)
        dispatch(isLoadingAction(true))
        const response=await fetch(url)
        if(response.ok){
            const resData=await response.json();
            dispatch(fetchDataAction(resData))
            dispatch(isLoadingAction(false))        
        }
    }catch(err){
        dispatch(isErrorAction(err.message))        
        dispatch(isLoadingAction(false))        
    }
   
  
}
  return {
    data:state.data,
    isLoading:state.isLoading,
    isError:state.isError,
  }
}

export default useFetch