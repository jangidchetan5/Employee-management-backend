const mongoose = require("mongoose");
//creating signup schema
const holidaySchema = new mongoose.Schema({
  name: String,
  day: String,
  date: Date,
});
//creating collection
const holidayCollectionObj = new mongoose.model("holidays", holidaySchema);

module.exports = { holidayCollectionObj };
