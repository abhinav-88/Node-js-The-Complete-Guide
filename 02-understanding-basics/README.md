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
* Run node app.js

## Redirecting Requests(04-redirecting-requests)
* Edit app.js inside 04-redirecting-requests
* Run node app.js

## Parsing Request Bodies(05-parsing-request-bodies)
* Streams & Buffers
    * Stream
        * It is an ongoing process, the request is read by node in chunks.
        * In multiple parts & in the end its done.
        * So, we can start working on chunks without having to wait for the full request being read.
        * Stream ->
        * Idea: Start working on the Data early.
    * Buffer
        * How do you work with flow data ?
        * Use Buffer, which is like a bus stop.
        * It is a construct which allows you to hold multiple chunks & work with them before they are released.
* Edit app.js inside 05-parsing-request-bodies
* Run node app.js

## Understanding Event Driven Code Execution(06-understanding-event-driven-codeExecution)
* It is crucial concept that you can register code functions which run sometime in the future, but not necessarily right now.
* The code inside both req.on will not run because it is callback to be run in future.
* Instead code outside the if statement will run.
* Hence, blocking Code inside both req.on functions.
* return the req.on function to avoid making this code blocked.
* Edit app.js inside 06-understanding-event-driven-codeExecution

## Blocking & Non-Blocking Code(07-blocking-and-nonblocking-code)
* In writeFileSync sync is synchoronous and is a special method which will actually block code execution until this file is created.
* Working with files is avaialble in two modes
    * Synchorous mode: We block execution of the next line of code until this file is done. Not recommended in real world scenarios.
    * Asynchronous mode: Recommended
* Edit app.js inside 07-blocking-and-nonblocking-code
* Run node app.js

## Node.js - Looking Behind the Scenes
* Single Thread, Event Loop & Blocking Code
    * Nodejs uses only one javascript thread(like a process in your OS).
    * Event Loop start automatically with node app.
    * Event loop Handle Event Callbacks that contain fast finishing code.
    * Instead our file system(fs) operation and other long taking operations are sent to worker pool which is also spun & managed by nodejs automatically.
    * This Worker Pool is responsible for all the heavy lifting.
    * The worker pool is detached from javascript & runs on different thread(s), it can spin up multiple threads.
    * The one connection to the event loop will have is, once the worker is done, it will trigger the callback for that read file operation.
    * And since the event loop is responsible for the events & callbacks, this will end up in event loop, so nodejs will execute appropriate callback.
    * The Event Loop
        * At each new eteration it checks if there any Timer callbacks is should execute
            * Timers: Execute setTimeout, setInterval Callbacks
        * Then it checks other callbacks
            * Pending Callbacks: Execute I/O-related(disk & network related), Callbacks that were deferred
        * The nodejs will look for Poll phase, checks for new I/O events. Or defer execution to Pending callbacks. Or jump to Timer Execution
            * Poll: Retieve new I/O events, execute their callbacks
        * Next, check immediate callbacks will be executed in a so-called check phase
            * Check: Execute setImmediate() callbacks
        * Now, nodejs will execute all close event callbacks
            * Close Callbacks: Execute all 'close' event callbacks
        * Then we might exit the whole nodejs program but only if there are no remaining event handlers which are registered that means refs == 0(refs equl null)

## Using the Node Modules System(08-using-nodes-modules-system)
* Create routes.js inside 08-using-nodes-modules-system
* Edit app.js inside 08-using-nodes-modules-system
* Run node app.js

