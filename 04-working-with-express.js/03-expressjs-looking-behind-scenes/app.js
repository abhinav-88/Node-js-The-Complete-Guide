const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log("In the middleware!");
  // next allows the request to continue to the next middleware in line
  next();
});
app.use((req, res, next) => {
  console.log("In the another middleware!");
  res.send("<h1>Hello from Express!</h1>");
});
// const server = http.createServer(app);
server.listen(3000);
// In express listen function also creates the server
