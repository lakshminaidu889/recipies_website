import React, { useState } from "react";
function Counter(){
    //  let count=0
   const[value,setvalue]=useState(0)
   const increment=()=>{
    setvalue(value+1)
   }
   const decrement=()=>{
    setvalue(value-1)
   }
    return <div 
          style={{display:'flex',justifyContent:'center',alignItems:'center',height:'30vh',border:'10px solid yellow'}}>
            <h1>Cart-</h1>
        <button style={{ cursor:'pointer', backgroundColor:'red', border:'1px solid #ccc' ,color:'white',height:'45px',width:'80px'}} onClick={decrement}>decrement</button>
        <button style={{margin:'20px',backgroundColor:'black',color:'white',height:'45px',width:'80px'}}>{value}</button>
        <button style={{ cursor:'pointer', backgroundColor:'green', border:'1px solid #ccc' ,color:'white',height:'45px',width:'80px'}}  onClick={increment}>increment</button>
        </div>
}
export default Counter