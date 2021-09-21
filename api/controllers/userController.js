const express = require("express");
const jwt = require("jsonwebtoken");
//creating schema
const { authCollectionObj } = require("../../models/user");
const bcrypt = require("bcrypt");
//user signup
exports.user_signup = async function (req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const areaOfWork = req.body.areaOfWork;
  const phone = req.body.phone;
  const role = req.body.role;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  if (password !== confirmPassword) {
    res.status(401).json({ message: "password not matched" });
  } else {
    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "something went wrong" });
      } else {
        try {
          const userDetail = new authCollectionObj({
            firstName,
            lastName,
            phone,
            email,
            role,
            areaOfWork,
            password: hash,
          });
          const result = await userDetail.save();

          res.status(201).json({ message: "account successful created" });
        } catch (e) {
          res.status(500).json({ message: e });
        }
      }
    });
  }
};
//user login
exports.user_login = async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const user = await authCollectionObj.find({ email });
  try {
    if (user.length < 1) {
      res.status(401).json({ message: "auth failed" });
    } else {
      bcrypt.compare(password, user[0].password, function (err, result) {
        if (err) {
          res.status(401).json({ message: "something went wrong" });
        }
        if (result) {
          const token = jwt.sign(
            {
              username: user[0].username,
              userId: user[0]._id,
            },
            "secret",
            {
              expiresIn: "1h",
            }
          );
          res.status(200).json({ message: "successful login", token: token });
        } else {
          res.status(401).json({ message: "auth failed" });
        }
      });
    }
  } catch (err) {
    res.status(401).send(e);
  }
};
