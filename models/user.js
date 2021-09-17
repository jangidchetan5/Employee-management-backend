const mongoose=require('mongoose');
var dataSchema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    mobilenumber:Number,
    emailaddress:String,
    password:String,
    confirmpassword:String

   
})

module.exports=mongoose.model('employeedata',dataSchema);
