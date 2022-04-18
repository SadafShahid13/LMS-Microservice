const app = require('express')();
const port = 1003;

app.get("/", (req,res)=>{
    res.send("Hello fron container Give Quiz");
})

app.listen(port, ()=>{
    console.log(`App Give quiz listening to port ${port}`);
})