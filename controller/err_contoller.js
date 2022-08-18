exports.generalErr = (err) => {
    if (err) {
        console.error(err);
    }
}

exports.err404 = (req, res, next) => {
    res.render('404', {
        pageTitle : "404 Error | Page not found!"
    })
}