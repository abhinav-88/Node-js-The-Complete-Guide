const http = require('http');

const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log('In the middleware!');
    // next allows the request to continue to the next middleware in line
    next();
});
app.use((req, res, next) => {
    console.log('In the another middleware!');
});
const server = http.createServer(app);
server.listen(3000);