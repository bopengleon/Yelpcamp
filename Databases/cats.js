var mongoose= require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
})

var Cat= mongoose.model("Cat", catSchema);
var george = new Cat({
    name:"George",
    age:11,
    temperament:"Grouchy"
});

george.save(function(err,cat){
    if(err){
        console.log("Something went wrong")
    } else {
        console.log (" we just save a cat to the db: ")
        console.log(cat)
    }
});


