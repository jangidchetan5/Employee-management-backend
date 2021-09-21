const express = require("express");
const jwt = require("jsonwebtoken");
//creating schema
const { authCollectionObj } = require("../../models/user");
//get EmployeeList
exports.get_employeeList = async function (req, res) {
  const employee = await authCollectionObj.find();
  res.status(200).json({ data: employee });
};
//fetch specific employee
exports.get_employee = async function (req, res) {
  try {
    const _id = req.params.id;

    const employee = await authCollectionObj.find({ _id });
    res.status(200).json({ data: employee });
  } catch (e) {
    res.status(500).json(e);
  }
};
//update employee details
exports.update_employee = async function (req, res) {
  try {
    const _id = req.params.id;
    const update = await authCollectionObj.findByIdAndUpdate(_id, req.body);
    res.status(200).send({ message: "successful updated" });
  } catch (e) {
    res.status(500).send(e);
  }
};
//delete employee
exports.delete_employee = async function (req, res) {
  try {
    const _id = req.params.id;

    const result = await authCollectionObj.findByIdAndDelete(_id);
    if (result) {
      res.status(200).send({ message: "successful deleted" });
    }
  } catch (e) {
    res.status(404).json({ message: "id not found" });
  }
};
