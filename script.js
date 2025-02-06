//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes.forEach((input, index) => {
    input.addEventListener("input", (event) => {
        if (event.target.value && index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && index > 0) {
            codes[index - 1].focus();
        }
    });
});
