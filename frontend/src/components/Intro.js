import React from "react";
import "../Allcss/Intro.css";
import news from "../image/vote5.jpg";
import document from "../image/document.png";
import { useHistory } from "react-router-dom";

const Intro=()=>
{
   const history = useHistory();
     return(
        <>
        <div className="header">
         <nav>
            <h1 className="title1">Decentralized Voting</h1>
            <div><img className="document" src={document} alt="this is document" /><a href="/instruction">Instruction</a></div>
         </nav>
        </div>
        <div className="home">
             <div className="container">
              <div className="part1">
                <img src={news} alt="this is our intro" className="p1"/>
                <p>Voting is everyone rights and everyone should <br/> vote for making our future bright</p>
             </div>               
             <div className="part2">
                <h1>Who are you</h1>
                <p>click to start the jounery</p>
                <button className="btn" onClick={()=>history.push("/register")}>User</button>
                <button className="btn" onClick={()=>history.push("/adminlogin")}>Admin</button>
             </div>
             </div>
         </div>
        </>
     )
}

export default Intro;