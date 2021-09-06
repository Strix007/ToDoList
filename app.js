
const express = require("exxpress");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
})

app.listen(port, function (){
    console.log("Server Started On Port" + port);
})