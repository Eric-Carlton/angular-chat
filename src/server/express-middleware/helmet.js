const helmet = require("helmet"),
  bunyan = require("bunyan"),
  conf = require("../conf"),
  log = bunyan.createLogger({
    name: "helmet.js",
    level: conf.log.level
  });

module.exports = (() => {
  if (!conf.helmet) {
    log.warn(`No helmet options specified, using defaults`);
  }

  return helmet(conf.helmet || {});
})();
