const { timesheetCollectionObj } = require("../../models/timesheet");

//createtimesheet List route
exports.create_timesheets = async function (req, res) {
  try {
    const timesheetObj = new timesheetCollectionObj(req.body);
    const timesheet = await timesheetObj.save();
    res.status(200).json({ message: "successful created" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
//get timesheetList
exports.get_timesheetList = async function (req, res) {
  const timesheet = await timesheetCollectionObj.find();
  res.status(200).json({ data: timesheet });
};
//update timesheet details
exports.update_timesheet = async function (req, res) {
  try {
    const _id = req.params.id;
    const update = await timesheetCollectionObj.findByIdAndUpdate(_id, req.body);
    res.status(200).send({ message: "successful updated" });
  } catch (e) {
    res.status(500).send(e);
  }
};
//delete timesheet
exports.delete_timesheet = async function (req, res) {
  try {
    const _id = req.params.id;

    const result = await timesheetCollectionObj.findByIdAndDelete(_id);
    if (result) {
      res.status(200).send({ message: "successful deleted" });
    }
  } catch (e) {
    res.status(404).json({ message: "id not found" });
  }
};
