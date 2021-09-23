const { designationsCollectionObj } = require("../../models/designations");

//createdesignations List route
exports.create_designationss = async function (req, res) {
  try {
    const designationsObj = new designationsCollectionObj(req.body);
    const designations = await designationsObj.save();
    res.status(200).json({ message: "successful created" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
//get designationsList
exports.get_designationsList = async function (req, res) {
  const designations = await designationsCollectionObj.find();
  res.status(200).json({ data: designations });
};
//update designations details
exports.update_designations = async function (req, res) {
  try {
    const _id = req.params.id;
    const update = await designationsCollectionObj.findByIdAndUpdate(_id, req.body);
    res.status(200).send({ message: "successful updated" });
  } catch (e) {
    res.status(500).send(e);
  }
};
//delete designations
exports.delete_designations = async function (req, res) {
  try {
    const _id = req.params.id;

    const result = await designationsCollectionObj.findByIdAndDelete(_id);
    if (result) {
      res.status(200).send({ message: "successful deleted" });
    }
  } catch (e) {
    res.status(404).json({ message: "id not found" });
  }
};
