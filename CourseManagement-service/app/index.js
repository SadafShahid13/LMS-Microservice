const app = require('express')();
const express = require('express');
const mongoose = require('mongoose');
const alert = require('alert');
const body_parser = require('body-parser');

const port = 1006;

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
        console.log(error);
    })

app.get("/", (req,res)=>{

    

    res.render("courseManagementPage.ejs");

})

app.get("/viewstudents", (req,res)=>{
    const list = [];
    res.render("viewStudentsPage.ejs", {student:list});
})


app.listen(port, ()=>{
    console.log(`App dashboard listening to port ${port}`);
})