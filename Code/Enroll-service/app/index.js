const app = require('express')();
const express = require('express');
const alert = require('alert');
const mongoose = require('mongoose');
const body_parser = require('body-parser');

const port = 1004;

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//DataBase Stuff
const url = "mongodb://admin:admin@authexpress-shard-00-00.l8kxn.mongodb.net:27017,authexpress-shard-00-01.l8kxn.mongodb.net:27017,authexpress-shard-00-02.l8kxn.mongodb.net:27017/enrolledstudents?ssl=true&replicaSet=atlas-260l3u-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose
    .connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("DataBase for Enroll service connected");
    })
    .catch((error)=>{
        console.log(error);
    })

app.get("/", (req,res)=>{
    res.sendfile('enrollform.html');

})


app.post("/", (req,res)=>{
    const result = req.body;

    const enrolledStudents = require('./enrolledStudents.model');

    const newStudent = new enrolledStudents(result);

    newStudent.save().then(()=>{
        console.log("Assigned Successfully");
        alert("Assigned Successfully");
    })
    .catch((e)=>{console.log(e)});
    
    res.redirect("http://localhost:1002/")

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