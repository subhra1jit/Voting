const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config({path:"./config.env"});

const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(cors());

const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>
{
    console.log("You are connected to DataBase");
});

const userSchema = new mongoose.Schema({
    name:String,
    voterId:Number,
    Password:String,
    vote:{
        type:Boolean,
        default:false
    }

})

const User = new mongoose.model('User', userSchema);

app.post("/register",(req,res)=>
{
    const {name,voterId,Password} = req.body;
    User.findOne({voterId:voterId},(err,user)=>
    {
        if(user)
        {
            res.send({
                message:"user already register"
            })
        }
        else
        {
            const user = new User({
                name,voterId,Password
            });
            user.save((err)=>
            {
                if(err)
                {
                    res.send(err);
                }else
                {
                    res.send({message:"successfull stored"});
                }
            })
        }
    })
})

app.post("/login",(req,res)=>
{
    const {name,voterId,Password} = req.body;
    User.findOne({voterId:voterId},(err,user)=>
    {
        if(user)
        {
           if(Password === user.Password)
           {
            res.send({
                message:"login successfully",user:user})
           }else
           {
            res.send({
                message:"password does not match"
            })
           }
        }
        else
        {
              res.send({
                message:"user not registered"
              })
        }
    })

})


app.listen(5000,()=>
{
    console.log("here is the starting od the backend server");
})

