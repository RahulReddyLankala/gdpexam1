var mongoose =require('mongoose');

module.exports =mongoose.connect('mongodb+srv://admin:admin@cluster0-hohsk.mongodb.net/gdpexam?retryWrites=true')

.then(() => {

console.log("DB connected")

}, err => {

console.log("DB error")

}

);