const mongoose = require("mongoose");
//creating department schema
const departmentSchema = new mongoose.Schema({
  number: Number,
  departmentname: String,
  
});
//creating collection
const departmentCollectionObj = new mongoose.model("departments", departmentSchema);

module.exports = {  departmentCollectionObj };
