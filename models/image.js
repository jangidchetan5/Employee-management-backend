const mongoose = require("mongoose");
//creating image schema
const imageSchema = new mongoose.Schema({
    url: String,

});
//creating collection
const imagesCollectionObj = new mongoose.model("Images", imageSchema);

module.exports = { imagesCollectionObj };
