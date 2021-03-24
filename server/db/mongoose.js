var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://oumar:4ykBFnzi2R5wnP0h@cluster0.gthk7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true});
module.exports = {mongoose};