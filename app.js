const bunyan = require("bunyan"),
  log = bunyan.createLogger({ name: "app.js" }),
  express = require("express"),
  path = require("path"),
  conf = require("./src/server/conf"),
  app = require("./src/server/resources/expressServer").create(),
  server = require("./src/server/resources/ioServer").create(app);

// Point static path to dist
app.use(express.static(path.join(__dirname, "dist")));

// Catch all other routes and return the index file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

server.listen(conf.port, () => {
  log.info(`Listening at port ${conf.port}`);
});
