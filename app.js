const express = require("express");
const bodyParser = require("body-parser");

const app = express();



app.get("/", function(req, res){

    var today = new Date();
    var currentDay = today.getDay();

    if (currentDay === 6 || currentDay === 0) {
        res.send("It's the weekend!");
    } else {
        res.send("It's the weekday!  I have to work!");
    }

});

app.listen(3000, function(){
    console.log("Server is listening on port 3000.");
});