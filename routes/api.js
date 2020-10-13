const router = require('express').Router();

const { ErrorHandler } = require('../helpers/error')

const apiMathRouter = require("./math.routes")

router.use('/math', apiMathRouter)

router.all('*', (req, res, next) => {
    throw new ErrorHandler(404, `Can't find ${req.originalUrl} on this server!`)
});

module.exports = router;