const http = require('http');
const server  = http.createServer((req,res) => {
    // This arrow function will now run for every request that reaches our server
    console.log(req);
    // process.exit();
});
server.listen(3000);