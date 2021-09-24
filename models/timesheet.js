const mongoose = require("mongoose");
//creating department schema
const timesheetSchema = new mongoose.Schema({
  employeename: String,
  date: Date,
  projects: String,
  assignedhours:Number,
  hours:Number,
  description:String
  
});
//creating collection
const timesheetCollectionObj = new mongoose.model("timesheets", timesheetSchema);

module.exports = {  timesheetCollectionObj };
