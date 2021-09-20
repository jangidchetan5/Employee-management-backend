const mongoose = require('mongoose')
//creating signup schema
const authSchema = new mongoose.Schema({
  firstName:String,
  lastName:String,
  phone:String,
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
 
});
//creating collection
const authCollectionObj = new mongoose.model('usersCollection',authSchema)
 
 
 
module.exports = {authCollectionObj}
