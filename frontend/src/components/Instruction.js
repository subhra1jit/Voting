import React from "react";
import { useHistory } from "react-router-dom";


const Instruction=()=>
{
    const history = useHistory();
   return(
    <>
        <h1>This is the instruction page</h1>
        <h1>1. Rules</h1>
        <p>please follow these steps to Vote</p>
        <div className="btn" onClick={()=>{ history.push("/")}}>Back</div>
    </>
   ) 
}

export default Instruction;