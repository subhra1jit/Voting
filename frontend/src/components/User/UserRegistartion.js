import React from "react";
import { useState } from "react"; 
import "../../Allcss/User.css";
import document from "../../image/document.png";
import { useHistory } from "react-router-dom";
import axios from "axios";


const UserReg=()=>
{
   const history = useHistory();

   const[user,setUser] = useState({
      name:"",
      voterId:"",
      Password:"",
      reEnterPassword:""
   })

   const handleChange=(e)=>
   {
      const {name,value} = e.target;
      setUser({
         ...user,
         [name]:value
      })
   }

   const register=()=>
   {
      const {name,voterId,Password,reEnterPassword} = user;
      if(name && voterId && (Password === reEnterPassword))
      {
         axios.post("http://localhost:5000/register",user).then((res)=>
      {
          alert(res.data.message);
      });
      }else
      {
         alert("invalid input");
      }
   }

     return(
        <>
        <div className="header">
         <nav>
            <h1 className="title1">Decentralized Voting</h1>
            <div><img className="document" src={document}  alt="document page"/><a href="/instruction">Instruction</a></div>
         </nav>
        </div>
            <div className="box">
               <div className="part1">
                  <h1>User</h1>
                  <h2>If you have already register<br/> then click here to login</h2>
                  <button className="btn" onClick={()=>{history.push("/login")}}>login</button>
               </div>
               <div className="part12">
                  <h1>Registration</h1>
                  <input type="text" placeholder="Enter your name" name="name" value={user.name} onChange={handleChange}></input>
                  <input type="text" placeholder="Enter your Voter ID Number" name="voterId" value={user.voterId} onChange={handleChange}></input>
                  <input type="text" placeholder="Enter Password" name="Password" value={user.Password} onChange={handleChange}></input>
                  <input type="text" placeholder="Re-enter your Password" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange}></input>
                  <div className="button" onClick={register}>register</div>
               </div>
               
        </div>
      </>
     )
}

export default UserReg;