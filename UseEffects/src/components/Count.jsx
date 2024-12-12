import React, { useEffect } from 'react'

const Count = ({counter}) => {
    useEffect(()=>{
        console.log("Test");
        return(
            ()=>{
                console.log("UnMount");
                
            }
        )
    },[])
  return (
    <>
    <div>{counter}</div>
    </>
  )
}

export default Count;