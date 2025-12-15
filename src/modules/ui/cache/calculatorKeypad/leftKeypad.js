import { calculatorKeypad } from "../calculator";

const leftKeypad = calculatorKeypad.querySelector('#left-keypad');

export const signToggleKey = leftKeypad.querySelector('#sign-toggle');
export const radixPointKey = leftKeypad.querySelector('#radix-point');
export const singleZeroKey = leftKeypad.querySelector('#single-zero');

export const allKeys = Array.from(leftKeypad.querySelectorAll('.key'));

export default leftKeypad;
