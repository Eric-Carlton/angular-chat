const express = require("express"),
  conf = require("../conf.js"),
  glob = require("glob"),
  path = require("path"),
  bunyan = require("bunyan"),
  bodyParser = require("body-parser"),
  app = express(),
  log = bunyan.createLogger({
    name: "expressServer.js",
    level: conf.log.level
  });

module.exports = {
  create: () => {
    app.use(bodyParser.json());

    // load middleware and add to app
    glob.sync(conf.express.middlewarePath).forEach(file => {
      log.debug("Adding express middleware at", file);
      app.use(require(path.resolve(file)));
    });

    // load route handlers
    glob.sync(conf.express.routesPath).forEach(file => {
      const router = express.Router(),
        route = require(path.resolve(file));

      route.handler(router);

      log.debug(`Adding express route ${file} at path /api/${route.path}`);

      app.use(`/api${route.path}`, router);
    });

    // define generic error handling middleware to prevent stack trace leak
    app.use((err, req, res, next) => {
      log.error(
        `Unable to process ${req.method} request ${req.headers.reqid} to ${
          req.originalUrl
        }`,
        err
      );
      res.status(err.status || 500).send([{ error: errorMsg }]);
      next(err);
    });

    return app;
  }
};
