const express=require('express');
const app=express();
const mongoose=require('mongoose')
const studentRoute=require('./api/routes/students');
const fecultyRoute=require('./api/routes/feculty');
const bodyParser=require('body-parser');


mongoose.connect('mongodb+srv://kiran_1415:1234@waw.p4yrh.mongodb.net/<dbname>?retryWrites=true&w=majority');
mongoose.connection.on('error',err=>{
console.log('connection failed');
})
mongoose.connection.on('connected',connected=>{
    console.log("connected success!!!!!!!");
})
app.use('/profile', express.static('upload/images'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use('/student',studentRoute)
app.use('/feculty',fecultyRoute)

app.use((req,res,next)=>{
    res.status(400).json({
      error:'bad request'
    })
})

module.exports=app;