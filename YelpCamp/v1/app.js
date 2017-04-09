// npm install express ejs
//
var express = require("express");
var app = express();
var bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
 var campgrounds = [
       {name:"Salmon Greek", image:"http://www.photosforclass.com/download/316612921"},
       {name:"Salmon Greek", image:"http://www.photosforclass.com/download/316612921"},
       {name:"Salmon Greek", image:"http://www.photosforclass.com/download/316612921"}
    ]

app.get("/",function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
 
    
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req,res){
    var name =req.body.name;
    var image =req.body.image;
    var newCampground ={name: name, image: image};
    
    campgrounds.push(newCampground);
    res.redirect("/campgrounds")
    //get data from form and add to campground array 
    // redirect  back to campground page
    // npm install body-parser
});

app.get("/campgrounds/new", function(req,res){
    res.render("new");
});

app.listen(process.env.PORT,process.env.IP, function(){
   console.log("the yelpcamp server has started") 
}); 