const app = require('express')();
const port = 1002;

app.get("/", (req,res)=>{
    res.sendfile('dashboard.html');

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