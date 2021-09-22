const mongoose = require("mongoose");
//creating signup schema
const leavesAdminSchema = new mongoose.Schema({
  name: String,
  leavetype:String,
  from:Date,
  to:Date,
  noofdays:String,
  reason:String,
  status:String


});
//creating collection
const leavesAdminCollectionObj = new mongoose.model("leavesadmins", leavesAdminSchema);

module.exports = { leavesAdminCollectionObj };
