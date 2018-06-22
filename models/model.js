
var mongoose =require('mongoose');




var userSchema =mongoose.Schema({
    make : String,
    model : String,
    year : Number,
    type : String,
    features : String,
    purchaseDate : Date,
});

 

module.exports =mongoose.model('Consumer',userSchema);
