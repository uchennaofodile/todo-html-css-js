// const express = require('express');
// const app = express();


// app.set('view-engine', 'ejs')

// //Routing Get Home

// //get Routes
// app.get('/',(req,res) =>{
//     res.render('index.ejs', {name: 'Uchenna'})
// })

// app.get('/login',(req,res)=>{
//     res.render('views/login.ejs')
// })


// app.get('/register', (req,res)=>{
//     res.render('views/register.ejs')
// })

// //POST
// //const registerUrl = '/register';
// // res.render('login', { registerUrl });



// app.listen(3000);

//packages


const routes = require("./routes");
const bodyParser = require("body-parser");
const express = require('express');
const session = require('express-session')
const mysql = require("mysql2");
// const passport = require("./config/passport");
require('dotenv').config();
const apiKey = process.env.API_KEY;
const password = process.env.PASSWORD;

//Let's create a connection to our local MySQL DB
// const db = mysql.createConnection({
//     host: "localhost", 
//     user: "root",
//     password: password,
//     database: "chat"
// });

// db.connect((err)=>{
// if(err) throw err;
// console.log("MySQL is connected");
// });

//const mongoose = require('mongoose');


// const uri = `mongodb+srv://dbUser:${apiKey}@cluster0.mvogl.mongodb.net/?retryWrites=true&w=majority`

// async function connect(){
//     try{
//         await mongoose.connect(uri);
//         console.log("Connected to MongoDB");
//     } catch(error){
//         console.log(error);
//     }
// }
// connect();
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;



app.set('view engine', 'ejs');
//allows us to access 
app.use(express.urlencoded({ extended: false }))
app.set('views', path.join(__dirname, 'views'));

// Routings
app.get('/', (req, res) => {
  res.render('index.ejs', { name: 'Created By Uchenna Ofodile' });
});


app.get('/help', (req, res) => {
  res.render('help.ejs', { name: 'Created By Uchenna Ofodile' });
});


//GET Login
app.get('/login', (req, res) => {
  res.render('login.ejs', { name: 'Created By Uchenna Ofodile' });
});

app.get('/register', (req, res) => {
  res.render('register.ejs', { name: 'Created By Uchenna Ofodile' });
});



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

app.listen(3000, () => {
  console.log(`Server listening on port ${PORT}`);
});
