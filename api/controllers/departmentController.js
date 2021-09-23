const { departmentCollectionObj } = require("../../models/department");

//createdepartment List route
exports.create_departments = async function (req, res) {
  try {
    const departmentObj = new departmentCollectionObj(req.body);
    const department = await departmentObj.save();
    res.status(200).json({ message: "successful created" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
//get departmentList
exports.get_departmentList = async function (req, res) {
  const department = await departmentCollectionObj.find();
  res.status(200).json({ data: department });
};
//update department details
exports.update_department = async function (req, res) {
  try {
    const _id = req.params.id;
    const update = await departmentCollectionObj.findByIdAndUpdate(_id, req.body);
    res.status(200).send({ message: "successful updated" });
  } catch (e) {
    res.status(500).send(e);
  }
};
//delete department
exports.delete_department = async function (req, res) {
  try {
    const _id = req.params.id;

    const result = await departmentCollectionObj.findByIdAndDelete(_id);
    if (result) {
      res.status(200).send({ message: "successful deleted" });
    }
  } catch (e) {
    res.status(404).json({ message: "id not found" });
  }
};
