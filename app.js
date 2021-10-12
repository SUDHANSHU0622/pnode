const express = require('express')

const app = express()

app.get('/',function(req,res){
    res.send("Welcome to new app...")
})

app.listen(3000,()=>{
    console.log("Server is running at port 30000")
})