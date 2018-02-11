const conf = require("../conf.js"),
  bunyan = require("bunyan"),
  log = bunyan.createLogger({
    name: "io-events/chat.js",
    level: conf.log.level
  });

module.exports = {
  path: "/chat",
  handler: io => {
    io.on("connection", socket => {
      socket.emit("chat-message", { message: "Welcome to chat!" });
      log.debug("connection to /chat received");
      socket.on("disconnect", () => {
        log.debug("disconnection from /chat received");
      });
      socket.on("chat-message", message => {
        socket.emit("chat-message", { message: message });
      });
    });
  }
};
