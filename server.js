const express = require("express");
// connecting to database
require("./db/connection.js");
var cors = require("cors");
const app = express();
 
app.use(cors());
const port = process.env.PORT || 8000;
//it is use to recognize incoming req object as for post and put,this is middlewere
app.use(express.json());
app.use("/profile_image",express.static("public/uploads/"))
//registering  route
const auth_route = require("./api/routes/user");
const employee_route = require("./api/routes/employee");
const holiday_route = require("./api/routes/holidays");
const leavesadmin_route = require("./api/routes/leavesadmin");
const department_route = require("./api/routes/department");
const designations_route = require("./api/routes/designations");
const timesheet_route = require("./api/routes/timesheet");
app.use(employee_route);
app.use(auth_route);
app.use(holiday_route);
app.use(leavesadmin_route);
app.use(department_route);
app.use(designations_route);
app.use(timesheet_route);

app.listen(port, () => {
  console.log("server is running...");
});
