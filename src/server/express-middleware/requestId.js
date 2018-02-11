const crypto = require("crypto");

module.exports = (req, res, next) => {
  // just a simple hash of remote address and time
  req.headers["request-id"] = `REQ${crypto
    .createHash("md5")
    .update(new Date().getTime().toString())
    .update(req.connection.remoteAddress)
    .digest("hex")}`;

  res.header("request-id", req.header("request-id"));

  next();
};
