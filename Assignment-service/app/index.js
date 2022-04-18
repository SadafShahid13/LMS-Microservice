const app = require('express')();
const express = require('express');
const mongoose = require('mongoose');
const alert = require('alert');
const body_parser = require('body-parser');

const port = 1005;

 app.use(express.json());
 app.use(express.urlencoded({ extended: true}));

//DataBase Stuff
const url = "mongodb://admin:admin@authexpress-shard-00-00.l8kxn.mongodb.net:27017,authexpress-shard-00-01.l8kxn.mongodb.net:27017,authexpress-shard-00-02.l8kxn.mongodb.net:27017/assignment?ssl=true&replicaSet=atlas-260l3u-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose
    .connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("DataBase for assignment service connected");
    })
    .catch((error)=>{
        console.log(e);
    })

app.get("/", (req,res)=>{
    res.sendfile('assignmentform.html');

})


app.post("/", (req,res)=>{
    const data = req.body
    const rawdate =req.body.dateOfSubmission
    const date = new Date(rawdate)  
    console.log(req.body)
    const assignments = require('./assignment.model');

    var assignment = new assignments(data);
    assignment.dateOfSubmission = date;

    console.log({assignment});
     
    assignment.save().then(()=>{
        console.log("Assigned Successfully");
        alert("Assigned Successfully");
    })
    .catch((e)=>{console.log(e)});

    res.redirect("/")

})

// app.get("/enroll", (req,res)=>{
//     console.log("Going to service 1");
//     res.writeHead(302, {
//         Location: 'http://localhost:1001/'
//     });
//     res.end()
// });

app.listen(port, ()=>{
    console.log(`App dashboard listening to port ${port}`);
})