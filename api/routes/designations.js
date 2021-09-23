const express = require("express");
const router = new express.Router();
const designationsController = require("../controllers/designationsController");
const auth = require("../middlewere/auth");
//holiay create route
router.post("/createdesignations", auth, async (req, res) => {
  designationsController.create_designationss(req, res);
});
//get designationssList
router.get("/designationsList", auth, async (req, res) => {
  designationsController.get_designationsList(req, res);
});
//update designations route
router.patch("/updatedesignations/:id", auth, async (req, res) => {
  designationsController.update_designations(req, res);
});
//delete designations  route
router.delete("/deletedesignations/:id", auth, async (req, res) => {
  designationsController.delete_designations(req, res);
});
module.exports = router;
