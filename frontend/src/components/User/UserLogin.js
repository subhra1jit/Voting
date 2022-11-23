import React from "react";
import { useState } from "react"; 
import "../../Allcss/Userlogin.css";
import document from "../../image/document.png";
import { useHistory } from "react-router-dom";
import axios from "axios";


const Userlogin=()=>
{
   const history = useHistory();
   const[user,setUser] = useState({
      name:"",
      voterId:"",
      Password:"",
   })

   const handleChange=(e)=>
   {
      const {name,value} = e.target;
      setUser({
         ...user,
         [name]:value
      })
   }

   const login=()=>
   {
      const {name,voterId,Password} = user;
      if(name&&voterId&&Password)
      {
         axios.post("http://localhost:5000/login",user).then((res)=>
         {
            alert(res.data.message);
         })
      } else
         {
            alert("invalid input");
         }
      }
     return(
        <>
        <div className="header">
         <nav>
            <h1 className="title1">Decentralized Voting</h1>
            <div><img className="document" src={document} alt="this ia our login" /><a href="/instruction">Instruction</a></div>
         </nav>
        </div>
            <div className="box1">
               <div className="part3">
                  <h1>Login</h1>
                  <input type="text" placeholder="Enter your name" name="name" value={user.name} onChange={handleChange}></input>
                  <input type="text" placeholder="Enter your Voter ID Number" name="voterId" value={user.voterId} onChange={handleChange}></input>
                  <input type="text" placeholder="Enter Password" name="Password" value={user.Password} onChange={handleChange}></input>
                  <div className="button" onClick={login}>login</div>
                  <div className="or">OR</div>
                  <div className="button" onClick={()=>{history.push("/register")}}>Registration</div>
               </div>
               
        </div>
      </>
     )
}

export default Userlogin;