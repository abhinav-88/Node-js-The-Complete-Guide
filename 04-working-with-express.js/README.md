# Section 5: Working with Express.js

## Module Introduction
* What is Express.js ?
* Using Middleware
* Working with Requests & Response(Elegantly!)
* Routing
* Returning HTML Pages(Files)

## What is Express.js?
* What & Why?
    * Server Logic is complex.
    * You want to focus on you Business Logic, not on the nitty-gritty Details!
    * Use a Framework for the Heavy Lifting!
        * Framework: Helper funtions, tools & rules that help you build you application
* Alternatives to Express.js
    * Vanilla Node.js
    * Adonis.js(larvel insipired framework for node.js)
    * Koa
    * Sails.js
    * ...
* It is highly flexible
* CGPT
    * Express.js is a minimalistic, open-source web application framework for Node.js
    * It provides a set of features and utilities that simplifies the process of building web applications and APIs
    * Express.js is built on top of Node.js and extends its capabilities, making it easier for developers to handle various aspects of web development
    * Key features and characteristics of Express.js include:
        * Web Server: Express.js allows developers to create a web server and handle HTTP requests and responses easily. 
        * Middleware Support: One of the core strengths of Express.js is its middleware support.
        * Routing: Express.js provides a straightforward and flexible routing system
        * Templating Engines: While Express.js itself does not include a templating engine, it can be easily integrated with various templating engines like EJS (Embedded JavaScript), Pug (formerly Jade), Handlebars, etc
        * Error Handling: Express.js offers built-in error handling mechanisms, making it easier to manage errors that occur during the request-response cycle
        * NPM Integration: As with most Node.js applications, Express.js can utilize the vast ecosystem of Node packages through NPM, making it easier to add functionalities and extend the capabilities of the framework

## Installing Express.js(01-installing-expressjs)
* Initialize
    * npm init -y
* Install modules
    * npm i -S @types/node
* Edit package.json(add to scripts)
    * "start": "node app.js",
    * to   
    * "start": "nodemon app.js",
* Install express
    * npm install --save express
* Edit app.js

## Adding Middleware(01-installing-expressjs)
* Middleware
    * Incoming request is funneled through a bunch of functions by express.js
* Edit app.js (inside 01-installing-express.js)

## How Middle Ware Works(02-how-middleware-works)
* Edit app.js(inside 02-how-middleware-works)

## Express.js - Looking Behind the Scenes(03-expressjs-looking-behind-scenes)
* Edit app.js inside 03-expressjs-looking-behind-scenes

## Handling Different Routes(04-handling-different-routes)
* Edit app.js inside 04-handling-different-routes

## Assignment 2(05-assingment)
* 1. Create a npm project and install Express.js (Nodemon if you want)
* 2. Create an Express.js app which funnels the requests through 2 middleware functions that log something to the console and return on response
* 3. Handle requests to '/' and '/users' such that each request only has one handler/middleware that does something with it(e.g send dummy response)
* Solution
    * npm init -y
    * npm install --save express
    * npm install --save-dev nodemon
    * Inside package.json add this into scripts
        * "start": "nodemon app.js"
    * Edit app.js inside 05-assingment

## Parsing Incoming Requests(06-parsing-incoming-requests)
* Install body-parser
    * npm install --save body-parser
* Edit app.js inside 06-parsing-incoming-requests

## Limiting Middleware Execution to POST Requests(07-limiting-middleware-execution-to-post-requests)
* Edit app.js inside 07-limiting-middleware-execution-to-post-requests

## Using Express Router(08-using-express-router)
* Create routes folder inside 08-using-express-router
* Inside routes create admin.js & shop.js
* Edit to admin.js
* Edit to shop.js
* Edit app.js inside 08-using-express-router

## Adding a 404 Error Page(09-adding-404-page)
* Edit app.js inside 09-adding-404-page 

## Filtering Paths(10-filtering-paths)
* Edit admin.js inside routes
* Edit app.js inside 10-filtering-paths

## Creating HTML Pages(11-creating-html-pages)
* Create views folder inside 11-creating-html-pages & inside views create shop.html & add-product.html
* Edit add-product.html
* Edit shop.html

## Serving HTML Pages(12-serving-html-pages)
* Edit admin.js inside routes
* Edit shop.js inside routes

## Returning a 404 Page(13-returning-404-page)
* Create 404.html inside views
* Edit app.js inside 12-returning-404-page

## A Hint!
* In the next lecture, we'll write this code:
    * module.exports = path.dirname(process.mainModule.filename);
* (I explain why we write this code in the next lecture when we write it!)
* The important thing is that you might get a deprecation warning for that code - in that case, you can simply switch to this code:
    * module.exports = path.dirname(require.main.filename);

## Using a Helper Function for Navigation(14-using-helper-function-for-navigation)
* Create util folder inside 14-using-helper-function-for-navigation & inside create path.js
* Edit shop.js
* Edit admin.js

## Styling Our Pages(15-styling-our-pages)
* DIY

## Serving Files Statically 
* Create public folder inside 16-serving-files-statically
* NOTE: All files are not accessible to public. Only files present in public folder are accessible to public
* Serving files statically means
    * Not handled by the express router or other middleware but instead directly forwarded to the file system
* Add a middleware to forward to file system inside app.js
* Extract css code from html files & paste in main.css & product.css inside public folder

## Assignment
* 1. Create a npm project and install Express.js(Nodemon if you want)
* 2. Create an Express.js app which serves two HTML files(of your choice/with your content) for '/' and '/users'.
* 3. Add some static(.js or css) files to your project that should be required by at least one of your HTML files.
* Solution
    * npm init -y
    * npm install --save express
    * npm install --save-dev nodemon
    * Create app.js inside 17-assignment
    * Create routes inside 17-assignment & inside create index.js
    * Create views inside 17-assignment & inside create index.html
    * Inside views create users.html
    * Create public inside 17-assignement & inside create main.j

## Wrap Up
* What is Express.js
    * It is a Node.js Framework - a package that adds a bunch of utility functions and tools and a clear set of rules on how the app should be built(middleware)
    * It's highly extensible and other packages can be plugged into it(middleware)
* Middleware, next() and res()
    * Express.js relies heavily on middleware functions - you can easily add them by calling use()
    * Middleware functions handle a request and should call next() to forwardthe request to the next function in line(from top to bottom in your root file) or send a response
* Routing
    * You can filter requests by path and method
    * If you filter by method, paths are matched exactly, otherwise, the first segment of a URL is matched
    * You can use the express.Router() to split your routes across files elegantly
* Serve Files
    * You're not limited to serving dummy text as a message
    * You can sendFile()s to your users - e.g. HTML files
    * If a request is directly made for a file(e.g. a .css file is requested), you can enable static serving for such files via express.static()

    