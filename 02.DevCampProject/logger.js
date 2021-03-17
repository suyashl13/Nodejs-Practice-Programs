// @desc Logs requests to console

const logger = (req, res, next) => {
    req.hello = "Hello world"
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.url} ${res.statusCode}`);
    next();
}

module.exports = logger