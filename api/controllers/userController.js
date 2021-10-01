const jwt = require("jsonwebtoken");
//creating schema
const { authCollectionObj } = require("../../models/user");
const bcrypt = require("bcrypt");

//user signup
exports.user_signup = async function (req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  // const phone = req.body.phone;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const joiningdate = req.body.joiningdate;
  const phone = req.body.phone;
  const company = req.body.company;
  const department = req.body.department;
  const designation = req.body.designation;
  const birthday = req.body.birthday;
  const gender = req.body.gender;
  const address = req.body.address;
  const profile_image = `http://localhost:8000/profile_image/${req.file.filename}`
  const bankname = req.body.bankname;
  const accountno = req.body.accountno;
  const ifsc = req.body.ifsc;
  const pan = req.body.pan;
  const institution = req.body.institution;
  const stream = req.body.stream;
  const startingdate = req.body.startingdate;
  const completedate = req.body.completedate;
  const pastcompanyname = req.body.pastcompanyname;
  const location = req.body.location;
  const jobposition = req.body.jobposition;
  const pastCompanyFrom = req.body.pastCompanyFrom;
  const pastCompanyTo = req.body.pastCompanyTo;

  if (password !== confirmPassword) {
    res.status(401).json({ message: "password not matched" });
  } else {
    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "something  went wrong" });
      } else {
        try {
          const userDetail = new authCollectionObj({
            firstName,
            lastName,
            // phone,
            email,
            password: hash,
            joiningdate,
            phone,
            company,
            department,
            designation,
            birthday,
            gender,
            address,
            profile_image,
            bankname,
            accountno,
            ifsc,
            pan,
            institution,
            stream,
            startingdate,
            completedate,
            pastcompanyname,
            location,
            jobposition,
            pastCompanyFrom,
            pastCompanyTo

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
  console.log(email)
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
          res.status(200).json({ message: "successful login", token: token, id: user[0]._id });
        } else {
          res.status(401).json({ message: "auth failed" });
        }
      });
    }
  } catch (err) {
    res.status(401).send(e);
  }
};
