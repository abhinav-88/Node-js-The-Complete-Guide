# Section 4: Improved Development Workflow and Debugging
## Understanding NPM Scripts
* Run npm install -y

## Installing 3rd Party Packages
* Local Project
* <Your Code>
* Core Node Packages
* Dependencies(3rd Party)
    * express
    * body-parser
    * ...
    * These packages are available through npm Repository & you can intall and manage them via npm
* Install auto-restart server on change in code
    * Run npm install nodemon --save-dev

## Global Features vs Core Modules vs Third-Party Modules
* You can basically differentiate between:
    * Global features: Keywords like const or function but also some global objects like process
    * Core Node.js Modules: Examples would be the file-system module ("fs"), the path module ("path") or the Http module ("http")
    * Third-party Modules: Installed via npm install - you can add any kind of feature to your app via this way
* Global features are always available, you don't need to import them into the files where you want to use them
* Core Node.js Modules don't need to be installed (NO npm install is required) but you need to import them when you want to use features exposed by them

## Understanding Different Error Types
* Syntax Errors
    * Ususally typos
* Runtime Errors
    * No typo, just that when you run program it breaks
* Logical Errors
    * Here no error is shown and your app does not work the way you want it to work

## Finding & Fixing Syntax Errors
* Ex
    * cons server = http.createServer(routes.handler);
* Syntax errors should always result in an error message and then sometimes its hard to find them
* Often it's like a typo, a mistyped variable name etc

## Dealing with Runtime Errors
* Carefully read the error shown in the terminal

## Logical Errors
* With the help of nodejs debugger you can tackle these errors
* Nodejs debugger has a great integration into visual studio code
* In VS Code goto Run -> Start Debugging

## Restarting the Debugger Automatically After Editing our App
* In VS Code Goto Run -> Add Configuration -> Node.js -> edit launch.json file
* Add
    * "restart": true,
    * "runtimeExecutable": "nodemon",
    * "console": "integratedTerminal"
* Install nodemon globally
    * npm intall nodemon -g

## Debugging Node.js in Visual Studio Code
* Want to dive super-deep into the latest debugging capabilities Visual Studio Code gives you (for Node.js apps)?
* This article will be very helpful: https://code.visualstudio.com/docs/nodejs/nodejs-debugging

## Changing Variables in the Debug Console
* In VS Code Goto View -> Run -> Variables
* Can change variables on the fly

## Wrap Up
* npm
    * npm stands for 'Node Package Manager" and it allows you to manage your Node project with npm dependencies
    * You can intialize a project with npm init
    * npm scripts can be defined in the package.json to give you 'shortcuts' to common tasks/commands
* 3rd Party Packages
    * Node projects typically don't just use core modules and custom code but also third-party packages.
    * You can install them via npm
    * You can differentiate between production dependencies(--save), development dependencies(--save-dev) and global dependencies(-g)
* Types of Errors
    * Syntax, runtime & logical errors can break you app
    * Syntax & runtime errors throw(helpful) error message(with line numbers!)
    * Logical errors can be fixed with testing and the help of the debugger
* Debugging
    * Use the VS Code Node debugger to step into your code and go through it step by step
    * Analyze variable values at runtime
    * Look into(and manipulate) variables at runtime
    * Set breakpoints cleverly(i.e. repect the acyn/event-driven nature)

## Useful Resources
* More on debugging Node.js: https://nodejs.org/en/docs/guides/debugging-getting-started/
* Debugging Node in Visual Studio Code: https://code.visualstudio.com/docs/nodejs/nodejs-debugging