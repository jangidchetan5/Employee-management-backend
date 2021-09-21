const express = require("express");
// connecting to database
require("./db/connection.js");
var cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 8000;
//it is use to recognize incoming req object as for post and put,this is middlewere
app.use(express.json());
//importing route
const auth_route = require("./api/routes/user");
const employee_route = require("./api/routes/employee");
app.use(employee_route);
app.use(auth_route);

app.listen(port, () => {
  console.log("server is running...");
});
