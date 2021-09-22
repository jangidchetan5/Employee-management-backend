const express = require("express");
const router = new express.Router();
const leavesAdminController = require("../controllers/leavesAdminController");
const auth = require("../middlewere/auth");


//leavesAdmin create route
router.post("/createLeavesAdmin", auth, async (req, res) => {
    leavesAdminController.create_leavesAdmin(req, res);
  });

  //get leavesadminList
router.get("/leavesAdminList", auth, async (req, res) => {
  leavesAdminController.get_leavesAdminList(req, res);
});
//update leaves admin
router.patch("/updateLeavesAdmin/:id", auth, async (req, res) => {
  leavesAdminController.update_leavesAdmin(req, res);
});
//delete leavesadmin  
router.delete("/deleteLeavesAdmin/:id", auth, async (req, res) => {
  leavesAdminController.delete_leavesAdmin(req, res);
});

module.exports = router;