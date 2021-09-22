const { leavesAdminCollectionObj } = require("../../models/leavesadmin");
//createLeavesAdmin List route
exports.create_leavesAdmin = async function (req, res) {
  try {
    const leavesAdminObj = new leavesAdminCollectionObj(req.body);
    const leavesAdmin = await leavesAdminObj.save();
    res.status(200).json({ message: "successful created" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

//get Leaves admin list
exports.get_leavesAdminList = async function (req, res) {
  const leavesAdmin = await leavesAdminCollectionObj.find();
  res.status(200).json({ data: leavesAdmin });
};

//update holiday details
exports.update_leavesAdmin = async function (req, res) {
  try {
    const _id = req.params.id;
    const update = await leavesAdminCollectionObj.findByIdAndUpdate(_id, req.body);
    res.status(200).send({ message: "successful updated" });
  } catch (e) {
    res.status(500).send(e);
  }
};

//delete leaves admin
exports.delete_leavesAdmin = async function (req, res) {
  try {
    const _id = req.params.id;

    const result = await leavesAdminCollectionObj.findByIdAndDelete(_id);
    if (result) {
      res.status(200).send({ message: "successful deleted" });
    }
  } catch (e) {
    res.status(404).json({ message: "id not found" });
  }
};
