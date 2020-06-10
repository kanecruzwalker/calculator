// required variables
const express = require("express");
const app = express();

app.get("/", function (req,res){
    res.sendFile(__dirname + "/index.html")
});

// listener
app.listen(3000, function (){
    console.log("Server running on PORT 3000");
});
