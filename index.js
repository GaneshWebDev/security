const express=require('express');
const helmet=require('helmet');
const app=express()
app.use(helmet.hidePoweredBy());
app.use('/',(req,res)=>{
    res.json({message:'hello world'})
})
app.listen(5000,()=>{
    console.log('server lsitening to port number 5000')
})