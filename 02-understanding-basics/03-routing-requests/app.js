const http = require("http");
const server = http.createServer((req, res) => {
  // This arrow function will now run for every request that reaches our server
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  // Write allows us to write data to the response
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);
