const express = require("express");
const router = new express.Router();
const holidayController = require("../controllers/holidayController");
const auth = require("../middlewere/auth");
//holiay create route
router.post("/createHoliday", auth, async (req, res) => {
  holidayController.create_holidays(req, res);
});
//get holidaysList
router.get("/holidaysList", auth, async (req, res) => {
  holidayController.get_holidayList(req, res);
});
//update holiday route
router.patch("/updateHoliday/:id", auth, async (req, res) => {
  holidayController.update_holiday(req, res);
});
//delete holiday  route
router.delete("/deleteHoliday/:id", auth, async (req, res) => {
  holidayController.delete_holiday(req, res);
});
module.exports = router;
