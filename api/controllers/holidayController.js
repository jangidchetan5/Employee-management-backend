const { holidayCollectionObj } = require("../../models/holidays");

//createHoliday List route
exports.create_holidays = async function (req, res) {
  try {
    const holidayObj = new holidayCollectionObj(req.body);
    const holiday = await holidayObj.save();
    res.status(200).json({ message: "successful created" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
//get holidayList
exports.get_holidayList = async function (req, res) {
  const holiday = await holidayCollectionObj.find();
  res.status(200).json({ data: holiday });
};
//update holiday details
exports.update_holiday = async function (req, res) {
  try {
    const _id = req.params.id;
    const update = await holidayCollectionObj.findByIdAndUpdate(_id, req.body);
    res.status(200).send({ message: "successful updated" });
  } catch (e) {
    res.status(500).send(e);
  }
};
//delete holiday
exports.delete_holiday = async function (req, res) {
  try {
    const _id = req.params.id;

    const result = await holidayCollectionObj.findByIdAndDelete(_id);
    if (result) {
      res.status(200).send({ message: "successful deleted" });
    }
  } catch (e) {
    res.status(404).json({ message: "id not found" });
  }
};
