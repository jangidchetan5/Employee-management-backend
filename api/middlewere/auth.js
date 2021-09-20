const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodeData = jwt.verify(token, "secret");
    req.userData = decodeData;
    next();
  } catch (err) {
    res.status(401).json({ error: "invalid token" });
  }
};
