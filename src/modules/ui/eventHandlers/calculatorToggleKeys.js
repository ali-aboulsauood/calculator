import { calculatorKeypad } from "../cache/calculator";

calculatorKeypad.addEventListener('click', (event) => {
    if (event.target.classList.contains('toggle'))
        event.target.classList.toggle('active');
});
