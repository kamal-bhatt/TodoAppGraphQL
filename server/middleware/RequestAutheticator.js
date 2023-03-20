module.exports = {
    auth: (req, res, next) => {
        console.log("request authenticate")
        next()
    }
}