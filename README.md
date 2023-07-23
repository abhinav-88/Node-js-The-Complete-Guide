# Section 6: Working with Dynamic Content & Adding Templating Engines
## Module Introduction
* Managing Data( without a Database)
* Rendering Dynamic Content in our Views
* Understanding Templating Engines

## Sharing Data Across Requests & Users
* Edit admin.js
* Edit shop.js
* Edit app.js

## Templating Engines - An Overview 
* HTMLish Template
    * Code that contains a lot of html, html structure & markup, your style and JS imports, but some blanks(placeholder) in there
* Node/Express Content
    * Like our dummy array, our products array
* Templating engine
    * Understand a certain syntax for which it scans your html-ish template and where it then replaces placeholders or certain snippets depending on the engine you're using with real html content
    * But that content is generated on the fly, on the server by the templating engine
* Available Templating Engines
    * EJS
        * Syntax - <p><%= name %></p>
        * Uses normal HTML and plain JavaScript in your templates
    * Pug
        * Syntax - p#{ name }
        * Uses minimal HTML and custom template language
    * Handlebars
        * Syntax - <p>{{ name }}</p>
        * Use normal HTML and custom template language

## Installing & Implementing Pug
* Intalling
    * npm install --save ejs pug express-handlebars
* app.set allows us to set any value globally on our express application
    * view engine allows us to tell express hey for any dynamic templates we're trying to render, please use this engine we're registering here
    * views allows us to tell express where to find these dynamic views
* Add code to app.js
    * Setting up of pug templating engine
* Create shop.pug inside views
* Render shop.pug inside shop.js

## Outputting Dynamic Content
* Edit shop.js
* Edit shop.pug
* Official Pug Docs 
    * Want to learn more about Pug? Check out their official docs: https://pugjs.org/api/getting-started.html

## Converting HTML files to Pug
* Create add-product.pug
* Edit admin.js
* Create 404.pug
* Edit app.js

## Adding a Layout
* Inside views create layouts & inside layouts create main-layout.pug
* Edit 404.pug
* Edit add-product.pug

## Fininshing the Pug Template
* Edit admin.js
* Edit main-layout.js
* Edit shop.pug
* Edit shop.js 
* Edit app.js

## Avoiding an Error
* In the next lecture, we'll have a look at a different view engine: Handlebars
* Due to a (temporary) breaking change introduced by the library authors (of the package we'll install in the next lecture), make sure you run npm install --save express-handlebars@3.0 before you start using that package in the next lecture
    * npm install --save express-handlebars@3.0

## Working with Handlebars
* Edit app.js
* Create 404.hbs inside views

## Converting our Project to Handlebars
* {{# }}
    * Hashtag for special Block Statement
    * Block statements are statements which not just output some text but which wraps some content that should be outputed conditionally or in a loop
* Create add-product.hbs
* Create shop.js
* Edit shop.js

## Adding the Layout to Handlebars
* Edit app.js
* Edit main-layout.hbs
* Edit shop.js
* Edit shop.hbs
* add-product.hbs
* Edit admin.js

## Working with EJS
* EJS does not support layouts
* Edit app.js
* Create 404.ejs
* Create add-product.ejs
* Create shop.ejs

## Working on the Layout with Partials
* Create includes folder inside views & inside create 3 files
    * Create head.ejs
    * Create end.ejs 
    * Create navigation.ejs
* Edit 404.ejs
* Edit add-product.ejs
* Edit shop.ejs

## Assignment
* 1. Create a npm project and install Express.js(Nodemon if you want)
* 2. Add two routes
    * '/' => Holds a <form> that allows users to input their name
    * '/users' => Outputs an <url> with the user names(or some error text)
* Solution 
    * npm init -y
    * npm install --save express ejs body-parser
    * npm install --save-dev nodemon
    * npm install --save express-handlebars pug
    * Code files in Assignment-4

## Useful Resources & Links
* Pug Docs: https://pugjs.org/api/getting-started.html
* Handlebars Docs: https://handlebarsjs.com/
* EJS Docs: http://ejs.co/#docs
