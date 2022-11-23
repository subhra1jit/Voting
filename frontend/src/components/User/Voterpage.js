import React, { useState } from "react";
import "../../Allcss/voterpagecss.css";
const Voterpage=()=>
{
    const [choice,setChoice] = useState();

    const handleChange =(e)=>
    {
        setChoice(e.target.value);
    }
    return(
        <div className="box3">
        <div className="vote">
            <div className="intial">Choose your perfect Candaidate</div>
            <div className="Candidate1 card">
                <div> Name : Subhrajit Behera </div>
                <div > party : BJP </div>
                <div>Please enter 0 and submit to cast a vote to Subhrajit</div>
            </div>
           < div className="Candidate2 card">
                <div> Name : jitu Behera </div>
                <div > party : Congress </div>
                <div>Please enter 1 and submit to cast a vote to Jitu</div>
            </div>
            <div className="Candidate3 card">
                <div> Name : Subhra Behera </div>
                <div > party : BJD </div>
                <div>Please enter 2 and submit to cast a vote to Subhra</div>
            </div>
            <input type="text" className="choice1" placeholder="enter your choice" name="choice" value={choice} onChange={handleChange}/>
            <div className="button1">Submit</div>
            <div>OR</div>
            <div className="button1">Back</div>
        </div>
        </div>
    )
}

export default Voterpage;