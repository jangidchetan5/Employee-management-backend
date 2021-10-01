const express = require("express");
const router = new express.Router();
const resetPasswordController = require("../controllers/reset-passwordController");
const auth = require("../middlewere/auth");
//holiay create route
router.patch("/reset-password", async (req, res) => {
    resetPasswordController.reset_password(req, res);
});

module.exports = router;