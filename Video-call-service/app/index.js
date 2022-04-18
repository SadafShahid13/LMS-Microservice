const app = require("express")();
const port = 1001;
app.get("/",(req,res)=> res.send("hello from video service"))

app.listen(port ,()=> console.log("Video Call listening on 1001"))