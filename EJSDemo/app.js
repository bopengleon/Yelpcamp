var express= require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");


app. get("/", function (req,res){
    res.render("home"); // template render from ejs

});


app.get("/fallinlovewith/:thing", function(req,res){
    var thingVar =req.params.thing;
    res.render("love",{thingVar});//
})
app.get("/posts", function(req,res){
    var posts = [
        {title: "Post 1", author: " Susy"},
         {title: "hehe 1", author: " Susy"},
          {title: "realyly 1", author: " Susy"},
        
        ]
        res.render("posts.ejs",{posts:posts});
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening!");
});