const bunyan = require("bunyan"),
  glob = require("glob"),
  path = require("path"),
  conf = require("../conf"),
  log = bunyan.createLogger({
    name: "ioServer.js",
    level: conf.log.level
  });

module.exports = {
  create: app => {
    const server = require("http").Server(app),
      io = require("socket.io")(server);

    // load middleware and add to io
    glob.sync(conf.io.middlewarePath).forEach(file => {
      log.debug("Adding io middleware at", file);
      io.use(require(path.resolve(file)));
    });

    // load io events
    glob.sync(conf.io.eventsPath).forEach(file => {
      const event = require(path.resolve(file));
      log.debug("Adding io event at", event.path);
      event.handler(io.of(`/io${event.path}`));
    });

    return server;
  }
};
