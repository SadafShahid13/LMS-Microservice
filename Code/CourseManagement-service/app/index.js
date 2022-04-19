const app = require('express')();
const express = require('express');
const mongoose = require('mongoose');
const alert = require('alert');
const body_parser = require('body-parser');

const port = 1006;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//DataBase Stuff
var url = "mongodb://admin:admin@authexpress-shard-00-00.l8kxn.mongodb.net:27017,authexpress-shard-00-01.l8kxn.mongodb.net:27017,authexpress-shard-00-02.l8kxn.mongodb.net:27017/enrolledstudents?ssl=true&replicaSet=atlas-260l3u-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose
    .connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("DataBase for students connected");
    })
    .catch((error)=>{
        console.log(error);
    })

app.get("/", (req,res)=>{
    res.render("courseManagementPage.ejs");

})

app.get("/viewstudents", (req,res)=>{

    // Students Info
    const studentsSchema = new mongoose.Schema({
        name:{
            type: String,
            required: true
        },
    
        class:{
            type: String,
            required: true
        },
    
        dateEnrolled:{
            type: Date,
            default: Date.now
        }
    });

    const studentsModel = mongoose.model('enrolledstudentslist', studentsSchema);

    studentsModel.find().then((studentsData)=>{
        mongoose.connection.close();
        var url = "mongodb://admin:admin@authexpress-shard-00-00.l8kxn.mongodb.net:27017,authexpress-shard-00-01.l8kxn.mongodb.net:27017,authexpress-shard-00-02.l8kxn.mongodb.net:27017/assignment?ssl=true&replicaSet=atlas-260l3u-shard-0&authSource=admin&retryWrites=true&w=majority";
        mongoose
            .connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
            .then(()=>{
                console.log("DataBase for Assignments connected");
            })
            .catch((error)=>{
                console.log(error);
            })

        // Assignments Info
        const assignmentSchema = new mongoose.Schema({
            instruction:{
                type: String,
                required: true
            },
        
            class:{
                type: String,
                required: true
            },
        
            datePosted:{
                type: Date,
                default: Date.now
            },
        
            dateOfSubmission:{
                type: Date,
                required: true
            }
        });

        const assignmentModel = mongoose.model('assignmentsList', assignmentSchema);

        assignmentModel.find().then((assignmentsData)=>{
            var list = [];
            studentsData.forEach(student=>{
                const thisClass = student.class;
                assignmentsData.forEach(assignment=>{
                    if(thisClass == assignment.class){
                        list.push({student, assignment});
                    }
                })
            })
            console.log({list});
            res.render("viewStudentsPage.ejs", {list:list});
        }).catch((error)=>{
            console.log("Assignments Info Error", error);
            res.redirect("/");
        })

    }).catch((error)=>{
        console.log("Students Info Error", error);
        res.redirect("/");
    })
})


app.listen(port, ()=>{
    console.log(`App dashboard listening to port ${port}`);
})