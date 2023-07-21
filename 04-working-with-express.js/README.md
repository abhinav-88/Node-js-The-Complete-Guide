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

