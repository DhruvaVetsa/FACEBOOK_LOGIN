exports.getHome = (req, res, next) => {
    res.render("home", {
        pageTitle : "About Facebook"
    })
}

exports.getRegistration = (req, res, next) => {
    res.render("index", {
        pageTitle : "Sign Up for Facebook"
    })
}

exports.getLogin = (req, res, next) => {
    res.render("login", {
        pageTitle : "Login to your facebook account"
    })
}

exports.getProfile = (req, res, next) => {
    res.render("profile", {
        pageTitle : "Your Profile"
    })
}