const { create, all } = require('mathjs');

const config = {
    number: 'BigNumber',
    precision: 15
};

const math = create(all, config);

const { ErrorHandler } = require('../helpers/error')

const mathServices = {};

mathServices.calcMathExpression = (json) => {
    
    precisionExp = json.precision;

    if(precisionExp <= 0){
        throw new ErrorHandler(403, `This precision is invalid`)
    };

    if (!precisionExp) {
        precisionExp = 15;
    };
    expression = json.expression;
    
    math.config({
        precision: parseInt(precisionExp)
    });

    try {
        expressionResult = math.evaluate(expression);    
    } catch (error) {
        if (error instanceof SyntaxError) {
            return ({
                message: "SyntaxError"  
            });
        };
        return({errors: error});
    };

    return ({
        value: expressionResult.toString(),
        precision: parseInt(precisionExp)
    });
};

module.exports = mathServices;