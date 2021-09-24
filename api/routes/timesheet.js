const express = require("express");
const router = new express.Router();
const timesheetController = require("../controllers/timesheetController");
const auth = require("../middlewere/auth");
//holiay create route
router.post("/createtimesheet", auth, async (req, res) => {
  timesheetController.create_timesheets(req, res);
});
//get timesheetsList
router.get("/timesheetList", auth, async (req, res) => {
  timesheetController.get_timesheetList(req, res);
});
//update timesheet route
router.patch("/updatetimesheet/:id", auth, async (req, res) => {
  timesheetController.update_timesheet(req, res);
});
//delete timesheet  route
router.delete("/deletetimesheet/:id", auth, async (req, res) => {
  timesheetController.delete_timesheet(req, res);
});
module.exports = router;
