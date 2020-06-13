var mongoose= require('mongoose');
var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
   
        useUnifiedTopology : true
   }
   mongoose.connect('mongodb+srv://Carole:lestat2003@cluster0-jvacm.azure.mongodb.net/bddCG?retryWrites=true&w=majority',
    options,    
    function(err) {
     console.log(err);
    }
   );
   var userSchema= mongoose.Schema({
       firstName: {
        type: String,
        required: true
       },
       lastName: {
        type: String,
        required: true
       },
       age: {
        type: Number,
        required: true
       }
       
    });
    var UserModel= mongoose.model('users',userSchema);

    module.exports= UserModel;