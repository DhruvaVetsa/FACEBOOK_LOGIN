const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const userDB = require('./routes/users');
const passport = require('passport');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(require('express-session')({
    resave: false,
    saveUninitialized: false,
    secret: "My first Authentication"
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(userDB.serializeUser());
passport.deserializeUser(userDB.deserializeUser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

app.listen(3000);