const express = require("express");
const router = express.Router();

const { check } = require('express-validator');

const mathExpressions = require("../controllers/math.controllers");

router.get("/:expression/:precision", mathExpressions.getMathExpression);

router.get("/:expression", mathExpressions.getMathExpression); // Default precision "15"

router.post("/", [
    check('expression', 'The expression is required').not().isEmpty(),
], mathExpressions.postMathExpression);

module.exports = router;
