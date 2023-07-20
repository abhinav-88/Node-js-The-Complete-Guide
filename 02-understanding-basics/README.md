# Section 03: Understanding The  Basics
## Module Introduction
* How Does The Web Work(Refresher) ?
* Creating a Node.js Server
* Using Node Core Modules
* Working with Requests & Responses(Basic)
* Asynchronous Code & The Event Loop

## Creating a Node Server
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

## Understanding Requests
* Edit app.js
* Run node app.js
