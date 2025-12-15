import { calculatorDisplay } from "../cache/calculator.js";

export const CALC_DISP_MAX_LEN = calculatorDisplay.dataset.maxlength;

export const CALC_DISP_DISABLE_RADIX_POINT_LEN = CALC_DISP_MAX_LEN - 3;
export const CALC_DISP_DISABLE_DIGIT_INPUT_LEN = CALC_DISP_MAX_LEN - 2;
