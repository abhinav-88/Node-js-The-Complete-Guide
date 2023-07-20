# Section 1: Introduction
## What is Node.js ? 
* It is a JavaScript runtime.
* It allows JS code to be run on the server.
* This means we can use node.js to run JS outside of the browser.
* It uses V8 engine build by Google that runs JS in the browser.
* The engine takes JS code compiles it to machine code.
* V8 is writtent in C++.
* CGPT -
    * Node.js is an open-source, server-side JavaScript runtime environment built on Chrome's V8 JavaScript engine.
    * It allows developers to execute JavaScript code outside of a web browser, making it possible to run JavaScript on the server side.
    * Node.js was created by Ryan Dahl and was first released in 2009.
    * Key features of Node.js include:
        * Asynchronous and Event-driven: 
            * Node.js is designed to handle asynchronous programming efficiently. 
            * It uses a non-blocking, event-driven I/O model that allows it to handle concurrent connections without getting stuck on slow operations, making it highly scalable and efficient for handling real-time applications.
        * Fast Performance: 
            * Node.js is built on the V8 engine, which is the same JavaScript engine used by Google Chrome. 
            * This engine compiles JavaScript into machine code, resulting in fast execution and improved performance.
        * Cross-platform: 
            * Node.js is cross-platform and can be run on various operating systems, such as Windows, macOS, and Linux.
        * NPM (Node Package Manager): 
            * Node.js comes with NPM, a powerful package manager that enables developers to access and use thousands of pre-built, open-source libraries and modules, simplifying the development process.
        * Server-side Applications:
            * With Node.js, developers can build web servers, networking tools, real-time chat applications, streaming applications, and many other types of server-side applications.
        * JavaScript Language Familiarity:
            * Since Node.js uses JavaScript, developers can use the same language on both the client and server sides, reducing the need to switch between different languages for web development.
    * Node.js has gained immense popularity in recent years due to its efficiency, performance, and extensive community support. 
    *  It has become a go-to choice for building modern web applications and services, especially in scenarios requiring real-time interactions or handling a large number of concurrent connections.

## Installing Node.js and Creating our First App
* REPL Mode
    * node (enter)
    * Ctrl+c to exit.
* Create first-app.js  inside 00-react-app
    * const fs = require('fs');
    * fs.writeFileSync('hello.txt', 'Hello from Node.js');
* Run npm init in the terminal.
* Run npm i -S @types/node in the terminal.
* Run node first-app.js.

## Understanding the Role & Usage of Node.js
* Client(Browser) Requests from Server.
* Server returns a Response("HTML Page").
* At Backend Servers: 
    * Connect to Database.
    * User Authentication.
    * Input Validation.
    * Your Business Logic.
* Client cannot access Server-side Code.
* Side note: You're not limited to the Server!:
    * Node.js is a JavaScript Runtime.
    * You can use it for more than just Server-side Code.
    * Utility Scripts, Build Tools, ...
* Node.js Role( in Web Development):
    * Run Server: Create Server & Listen to Incoming Requests.
    * Business Logic : Handle Requests, Validate Input, Connect to Database.
    * Responses: Return Responses (Rendered HTML, JSON, ...)

## Course Outline
* Getting Started
* JavaScript Refresher(optional)
* Node.js Basics
* Efficient Development
* Using Express.js
* Templating Engines
* Model-View-Controller
* Advanced Routes & Models
* Node + SQL(MySQL)
* Using Sequelize
* Node + NoSQL(MondoDB)
* Using Mongoose
* Sessions & Cookies
* Authentication
* Sending E-mails
* Authentication Deep Dive
* User Input Validation
* Error Handling
* File Uploads & Downloads
* Pagination
* Asyn Requests
* Handling Payments
* REST API Basics
* Advanced REST API Features
* Using async-await
* Websockets & Socket.io
* GraphQL
* Deoployment
* Beyond Web Servers
* Node + TypeScript, Deno

## Working with the REPL vs Using Files
* REPL
    * Read: Read User Input
    * Eval: Evaluate User Input
    * Print: Print Output(Result)
    * Loop: Wait for new Input
    * REPL is just you use by typing node inside the terminal.
    * It is an environment where we write & not store our code.
* Execute Files
    * Used for real apps.
    * Predictable sequence of steps.
* Use REPL
    * Great Playground!
    * Execute code as you write it.
* We started using npm, you need to run npm install inside of the extracted code attachment before you can run npm start to run the server.