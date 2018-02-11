const bunyan = require("bunyan"),
  conf = require("../conf"),
  log = bunyan.createLogger({
    name: "timer.js",
    level: conf.log.level
  });

module.exports = (req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    log.info(
      `${req.method} request ${req.headers["request-id"]} to ${
        req.originalUrl
      } took ${Date.now() - start}ms`
    );
  });

  next();
};
