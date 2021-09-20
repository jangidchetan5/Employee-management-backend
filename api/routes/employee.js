const express = require("express");
const router = new express.Router();
const employeeController = require("../controllers/employeeController");
const auth = require("../middlewere/auth");
//getEmployee List route
router.get("/employeeList", auth, async (req, res) => {
  employeeController.get_employeeList(req, res);
});
//getEmployee details route
router.get("/employee/:id", auth, async (req, res) => {
  employeeController.get_employee(req, res);
});

//delete employee  route
router.delete("/deleteEmployee/:id", auth, async (req, res) => {
  employeeController.delete_employee(req, res);
});

module.exports = router;
