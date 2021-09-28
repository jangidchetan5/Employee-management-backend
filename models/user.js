const mongoose = require("mongoose");
//creating signup schema
const authSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  // phone: Number,
  email: {
    type: String,
    require: true,
    index: {
      unique: true,
    },
    match: /[^@\s]+@[^@\s]+\.[^@\s]+/,
  },
  password: {
    type: String,
    require: true,
  },
  joiningdate:Date,
  phone:Number,
  company:String,
  department:String,
  designation:String,
  birthday:Date,
  gender:String,
  address:String,
  profile_image:String,
  bankname:String,
  accountno:Number,
  ifsc:String,
  pan:String,
  institution:String,
  stream:String,
  startingdate:Date,
  completedate:Date,
  pastcompanyname:String,
  location:String,
  jobposition:String,
  pastCompanyFrom:Date,
  pastCompanyTo:Date,
 





});
//creating collection
const authCollectionObj = new mongoose.model("usersCollection", authSchema);

module.exports = { authCollectionObj };
