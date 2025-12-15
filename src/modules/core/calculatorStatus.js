import { firstOperand, secondOperand, operation } from "./entities.js";

export const calculatorStatus = () => {
    const operationComponents = [ firstOperand, operation, secondOperand ];

    return operationComponents.indexOf(null);
};
