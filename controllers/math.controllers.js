const mathServices  = require('../services/math.service')

const mathControllers = {};

mathControllers.getMathExpression = async (req, res) => {
    
    result = await mathServices.calcMathExpression(req.params)
    res.json(
        result
    );
};

mathControllers.postMathExpression = async (req, res) => {
    
    result = await mathServices.calcMathExpression(req.body)
    res.json(
        result
    );
};

module.exports = mathControllers;