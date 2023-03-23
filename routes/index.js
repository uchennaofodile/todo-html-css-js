// const express = require("express");
// const db = require("../models");
// const routes = express.Router();
// const passport = require("../config/passport");
// //defines how routes behave

// app.set('views', path.join(__dirname, 'views'));

// // Routing
// app.get('/', (req, res) => {
//   res.render('index.ejs', { name: 'Uchenna' });
// });



// //GET Login
// app.get('/login', (req, res) => {
//   res.render('login.ejs');
// });

// app.get('/register', (req, res) => {
//   res.render('register.ejs');
// });



// //POST
// app.post('/login', (req,res)=>{
// passport.authenticate("local", {    failureRedirect: "/user/login",
// successRedirect: "/"})
// });

// //POST Register
// app.post('/register',  passport.authenticate("local-signup", {
//     successRedirect: "/",
//     failureRedirect: "/register"
//   })
// );

// module.exports = routes;