import { allKeys } from "../cache/calculator";

let clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });

document.addEventListener('keydown', (event) => {
    const keyboardKey = event.key;

    allKeys.forEach(key => {
        const mappedKeyboardKeys = key.dataset.keyboardKeys.split(' ');

        if (mappedKeyboardKeys.includes(keyboardKey)) {
            if (!key.disabled) {
                key.dispatchEvent(clickEvent);

                return;
            };
        };
    });
});
