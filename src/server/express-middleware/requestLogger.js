const conf = require("../conf.js"),
  bunyan = require("bunyan"),
  log = bunyan.createLogger({ name: "cors.js", level: conf.log.level });

module.exports = (req, res, next) => {
  let reqLogMessage = `${req.method} request ${req.headers["request-id"]} to ${
    req.originalUrl
  } received`;

  if (Object.keys(req.body).length > 0) {
    log.trace(reqLogMessage + " with body", req.body);
  } else {
    log.trace(reqLogMessage);
  }

  const oldSend = res.send;
  let resLogMessage = `Responding to ${req.method} request ${
    req.headers["request-id"]
  } to ${req.originalUrl} with status ${res.statusCode}`;

  res.send = function(data) {
    if (data) {
      log.trace(resLogMessage + " and body", data);
    } else {
      log.trace(resLogMessage);
    }
    res.send = oldSend;
    res.send.apply(res, arguments);
  };

  next();
};
