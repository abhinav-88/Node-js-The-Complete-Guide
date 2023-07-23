// 1 import express
const express = require("express");
const app = express();
// 2 setup templating engine
// app.set('view engine', 'pug');
// app.set('views', 'views');

// 6 import body-parser
const bodyParser = require("body-parser");
// 7 Register body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// 9 Import handlebar engine
const expressHbs= require("express-handlebars");
// // 10 Register handlebar engine
// app.engine('hbs', expressHbs());
// 12 set layout directory
app.engine(
  "hbs",
  expressHbs.engine({
    defaultLayout: "main-layout",
    extname: "hbs",
  })
);
// 11 Use handlebar engine
// 14 Use ejs engine
app.set("view engine", "ejs");
app.set("views", "views");

// 4 create array to hold users data
const users = [];

// 3 Create routes(middleware)
// for root
app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add User" });
});
// for users page
app.get("/users", (req, res, next) => {
  // // 8 users: users[](array created in step 4)
  // // Sending users[] array to users.pug
  // res.render('users', {pageTitle: 'User', users: users});
  // 13 create logic for checking if users are there or not
  res.render("users", {
    pageTitle: "User",
    users: users,
    hasUsers: users.length > 0,
  });
});
// for add-user page
app.post("/add-user", (req, res, next) => {
  // 5 Push new user data inside users[]
  // users.push();
  // 6 Save input that user enters inside users[]
  users.push({ name: req.body.username });
  res.redirect("/users");
});

// Create & listen server on 3000 port
app.listen(3000);
