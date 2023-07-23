# Section 7: The Model View Controller(MVC)
## Module Introduction
* Structuring your code

## What is MVC ?
* Models Views Controllers.
* Seperation of concern.
* Models
    * Represent you data in your code
    * Work with you data(e.g. save,fetch)
* Views
    * What the user sees
    * Decoupled from your application code
* Controllers
    * Connecting your Models and your Views
    * Contains the 'in between' logic
    * Split across Middleware Functions
    * Routes
        * Define upon which path for which http method which controller code should execute

## Adding Controllers
* Create controllers folder inside 06-model-view-controller-mvc & inside create products.js
* Edit admin.js inside routes 
* Edit shop.js inside routes 
* Edit app.js

## Fininshing the Controllers
* Create error.js inside controllers
* Edit app.js

## Adding a Product Model
* Create models folder inside 06-model-view-controller-mvc & inside create product.js
* Edit products.js inside controllers 

## Storing Data in Files Via the Model 
* Edit product.js inside models

## Fetching Data in Files via the Model
* Edit product.js inside models
    * Previously, this function was not returning anything, this was asynchronous function
    * Now, a callback(cb) is added to this function which refer to anonymous function inside products.js inside controllers
    * Data is fetched for all the products inside data/products.json
* Edit products.js inside controllers

## Refactoring the File Storage Code
* Edit product.js inside models

## Wrap up
* Model
    * Responsible for representing your data
    * Responsible for managing your data(saving, fetching, ...)
    * Doesn't matter if you manage data in memory, fiels, databases.
    * Contains data-related logic.
* View
    * What the user sees
    * Shoudn't contain too much logic(handlebars! which forces to not put logic into views)
* Controller
    * Connects Model & View
    * Should only make sure that the two can communicate(in both directions)

## Useful resources:
* More on MVC: https://developer.mozilla.org/en-US/docs/Glossary/MVC
