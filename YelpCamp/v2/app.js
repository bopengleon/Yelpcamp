// npm install express ejs
//
var express = require("express");
var app = express();
var bodyParser= require("body-parser");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

//schema set up
var campgroundSchema= new mongoose.Schema({
    name:  String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name:"Salmon Creek",
//     image:"http://www.photosforclass.com/download/7842069486",
//     description:"there is no bathroom"
// },function(err,campground){
//   if(err){
//       console.log(err);
//   } else {
//       console.log("newly created campground");
//       console.log(campground);
//   }
// });

//  var campgrounds = [
//       {name:"Salmon Greek", image:"http://www.photosforclass.com/download/316612921"},
//       {name:"Salmon Greek", image:"http://www.photosforclass.com/download/316612921"},
//       {name:"Salmon Greek", image:"http://www.photosforclass.com/download/316612921"}
//     ]

app.get("/",function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
 
    Campground.find({},function(err, allCampgrounds){
       if(err){
           console.log(err);
       } else {
           res.render("index", {campgrounds:allCampgrounds})
       }
    });
  //  res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req,res){
    var name =req.body.name;
    var image =req.body.image;
    var description =req.body.description;
    var newCampground ={name: name, image: image,description:description};
    
    Campground.create(newCampground,function(err,newlyCreated){
        if(err){
            console.log(err);
        }  else {
            res.redirect("/campgrounds")
        } 
        
    });
//    campgrounds.push(newCampground);
    //get data from form and add to campground array 
    // redirect  back to campground page
    // npm install body-parser
});

app.get("/campgrounds/new", function(req,res){
    res.render("new");
});

app.get("/campgrounds/:id", function(req,res){
    //find the campground with provided ID
    Campground.findById(req.params.id,function(err,foundCampground){
       if(err){
           console.log(err);
       } else {
           res.render("show",{campground: foundCampground})
       }
    });
});

app.listen(process.env.PORT,process.env.IP, function(){
   console.log("the yelpcamp server has started") 
}); 