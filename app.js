const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("homepage")

})

app.get("/about",function(req,res){
  res.render("about")

})

app.get("/write",function(req,res){
  res.render("Write")

})


app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
