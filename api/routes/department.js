const express = require("express");
const router = new express.Router();
const departmentController = require("../controllers/departmentController");
const auth = require("../middlewere/auth");
//holiay create route
router.post("/createdepartment", auth, async (req, res) => {
  departmentController.create_departments(req, res);
});
//get departmentsList
router.get("/departmentList", auth, async (req, res) => {
  departmentController.get_departmentList(req, res);
});
//update department route
router.patch("/updatedepartment/:id", auth, async (req, res) => {
  departmentController.update_department(req, res);
});
//delete department  route
router.delete("/deletedepartment/:id", auth, async (req, res) => {
  departmentController.delete_department(req, res);
});
module.exports = router;
