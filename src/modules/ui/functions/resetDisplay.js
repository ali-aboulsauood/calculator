import { calculatorDisplay } from "../cache/calculator";

import keysDisabledOnDisplayReset from "../cache/keysDisabledOnDisplayReset";

const resetDisplay = () => {
    calculatorDisplay.textContent = '0';

    keysDisabledOnDisplayReset.forEach(key => key.setAttribute('disabled', 'true'));
};

export default resetDisplay;
