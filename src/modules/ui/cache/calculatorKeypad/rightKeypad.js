import { calculatorKeypad } from "../calculator";

const rightKeypad = calculatorKeypad.querySelector('#right-keypad');

export const inputModifiersKeypad = rightKeypad.querySelector('#input-modifiers');
export const operationsKeypad = rightKeypad.querySelector('#operations');

export const calculateKey = rightKeypad.querySelector('#is-equal-to');

export default rightKeypad;
