const mongoose = require("mongoose");
//creating signup schema
const authSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  areaOfWork: String,
  profile_image:String,
  role: {
    type: String,
    default: "user",
  },
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
const authCollectionObj = new mongoose.model("usersCollection", authSchema);

module.exports = { authCollectionObj };
