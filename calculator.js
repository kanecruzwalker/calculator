// required variables
const express = require("express");
const app = express();

app.get("/", function (req,res){
    res.send("<h1>I am html</h1>")
});

// listener
app.listen(3000, function (){
    console.log("Server running on PORT 3000");
});
