const express = require("express");
const passport = require("passport");
const router = express.Router();
const usersDB = require("./users");

const localStrategy = require("passport-local");

const { body, validationResult } = require('express-validator');

passport.use(new localStrategy(usersDB.authenticate()));

router.get("/", (req, res) => {
    res.render("index", {
        error: "No error"
    });
});

router.post("/reg", body('password').isLength({ min: 8 }).withMessage("Password should be of minimum 8 charecters"), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.render("index", { error: errors });
    }
    else {
        console.log("In else");
        const dets = new usersDB({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
        });

        usersDB.register(dets, req.body.password).then((registeredUser) => {
            passport.authenticate("local")(req, res, () => {
                res.redirect("/profile");
            });
        });

    }
});

router.get("/profile", isLoggedIn, (req, res) => {
    usersDB.findOne({ username: req.session.passport.user })
        .then((user) => {
            res.render('profile', { user });
        })
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
}), (req, res) => { }
);

router.get("/logout", (req, res) => {
    req.logOut();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/login");
    }
}

module.exports = router;