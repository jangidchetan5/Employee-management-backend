const mongoose = require("mongoose");
//creating department schema
const designationsSchema = new mongoose.Schema({
  number: Number,
  designationsname: String,
  departmentname: String,
  
});
//creating collection
const designationsCollectionObj = new mongoose.model("designations", designationsSchema);

module.exports = {  designationsCollectionObj };
