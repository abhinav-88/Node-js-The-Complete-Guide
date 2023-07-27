const User = require("../models/user");
exports.getLogin = (req, res, next) => {
  console.log(req.session.isLoggedIn);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    // isAuthenticated: req.isLoggedIn,
    isAuthenticated: false,
  });
};
exports.postLogin = (req, res, next) => {
  User.findById("64c0eaae81e2137db1e86fde")
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      // res.redirect("/");
      req.session.save((err) => {
        console.log(err);
        res.redirect('/');
      });
    })
    .catch(err => console.log(err));
};
exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect("/");
  });
};
