import * as leftKP from "../cache/calculatorKeypad/leftKeypad.js";
import leftKeypad from "../cache/calculatorKeypad/leftKeypad.js";
import { calculatorDisplay } from "../cache/calculator.js";
import { CALC_DISP_DISABLE_DIGIT_INPUT_LEN, CALC_DISP_DISABLE_RADIX_POINT_LEN, CALC_DISP_MAX_LEN } from "../cache/calculatorDisplay.js";
import { calculatorStatus } from "../../core/calculatorStatus.js";

leftKeypad.addEventListener('click', (event) => {
    const target = event.target;

    if (!target.classList.contains('key'))
        return;

    const currentCalculatorStatus = calculatorStatus();

    if (calculatorDisplay.textContent === '0' || currentCalculatorStatus === -1)
        calculatorDisplay.textContent = '';

    if (target === leftKP.signToggleKey) {
        if (calculatorDisplay.textContent.startsWith('-'))
            calculatorDisplay.textContent = calculatorDisplay.textContent.slice(1);
        else
            calculatorDisplay.textContent = '-' + calculatorDisplay.textContent;
    }
    else {
        if (calculatorDisplay.textContent.length === CALC_DISP_DISABLE_RADIX_POINT_LEN)
            // Prevent the radix point from being the last character in the input
            leftKP.radixPointKey.disabled = true;
        else if (calculatorDisplay.textContent.length === CALC_DISP_DISABLE_DIGIT_INPUT_LEN) {
            // Disable keys except sign toggle at `CALC_DISP_MAX_LEN - 2` instead of `CALC_DISP_MAX_LEN - 1` to prevent visual overflow
            leftKP.allKeys.forEach(key => {
                if (key !== leftKP.signToggleKey)
                    key.disabled = true;
            });
        };

        calculatorDisplay.textContent += target.textContent;

        if (calculatorDisplay.textContent === '0')
            leftKP.singleZeroKey.disabled = true;
        else if (calculatorDisplay.textContent.length < CALC_DISP_DISABLE_DIGIT_INPUT_LEN)
            leftKP.singleZeroKey.disabled = false;

        if (target === leftKP.radixPointKey) {
            target.disabled = true;

            // Prevent the sign toggle key from being enabled when no digit following the radix point has been entered.
            leftKP.signToggleKey.disabled = true;
        }
        else
            leftKP.signToggleKey.disabled = false;
    };
});
