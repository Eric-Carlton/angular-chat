const cors = require("cors"),
  bunyan = require("bunyan"),
  conf = require("../conf"),
  log = bunyan.createLogger({
    name: "cors.js",
    level: conf.log.level
  });

module.exports = (() => {
  if (!conf.cors) {
    log.warn(`No cors options specified, using defaults`);
  }

  return cors(conf.cors || {});
})();
