import * as calc from "../entities.js";
import { errors } from "../errors/errors.js"

const performOperation = (operation, ...operands) => {
    const operationResult = operation(operands);

    if (!Number.isFinite(operationResult))
        return errors.MATH_ERROR;

    return operationResult;
};

export default performOperation;