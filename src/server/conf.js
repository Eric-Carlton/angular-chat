module.exports = {
  port: process.env.PORT || 3000,
  express: {
    middlewarePath: "./src/server/express-middleware/**/*.js",
    routesPath: "./src/server/express-routes/**/*.js"
  },
  io: {
    middlewarePath: "./src/server/io-middleware/**/*.js",
    eventsPath: "./src/server/io-events/**/*.js"
  },
  cors: {
    allowedOrigins: ["localhost:4200"],
    exposedHeaders: ["request-id"],
    allowedHeaders: ["content-type"],
    allowedMethods: ["GET"],
    credentials: false
  },
  log: {
    level: process.env.LOG_LEVEL || "trace"
  },
  helmet: {}
};
