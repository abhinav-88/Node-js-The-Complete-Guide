# Section 03: Understanding The  Basics
## Module Introduction
* How Does The Web Work(Refresher) ?
* Creating a Node.js Server
* Using Node Core Modules
* Working with Requests & Responses(Basic)
* Asynchronous Code & The Event Loop

## Creating a Node Server(00-understanding-basics)
* Node.js Code Modules
    * http: Launch a server, send requests.
    * https: Launch a SSL server.
    * fs: 
    * path
    * os
* Using require() you import files in node.js.
* Create folder 00-creating-node-server inside create app.js
* Run node app.js

## The Node Lifecycle & Event Loop
* node app.js ---
* ---> Start Script ---
* ---> Parse Code, Register Variables & Funtions ---
* ---> Event Loop ---
* ---> Keeps on running as long as there are event listeners registerd ---
* ---> process.exit
* Event Loop
    * Event Loop is a loop process manages by Node.js
    * It keeps on running as long as there is work to do.
* We passed a function to createServer(), that is basically an ongoing event listener, one we didn't unregister from & we shouldn't * because our server should of course  stay up and running.
* So our core node application is managed by this event loop.
* Nodejs uses this pattern because it actually executes threaded JS.
* So entire node process uses one thread on our computer it's running on.
* If you eventually were to unregister( can do with process.exit), it would end.
* Process.exit hard exited our event loop.

## Controlling the Node.js Process
* Want to quit your running Node.js server?
* You can always do that by pressing CTRL + C in the terminal/ command prompt window where you started your server (i.e. where you ran node app.js).

## Understanding Requests(01-understanding-requests)
* Edit app.js
* Run node app.js

## Sending  Responses(02-sending-responses)
* Edit app.js inside 02-sending-responses
* Run node app.js

## Request & Response Headers
* On both requests and responses, Http headers are added to transport metadata from A to B.
* The following article provides a great overview of available headers and their role: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
* Whilst this article is a great resource, especially to dive deeper, please don't learn this list by heart though! You'll encounter many of these headers throughout the course and I'll explain them when we need them.

## Routing Requests(03-routing-requests)
* Edit app.js inside 03-routing-requests
* Run node app.js.


