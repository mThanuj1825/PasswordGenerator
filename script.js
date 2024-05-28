let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");

let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");

let generateBtn = document.getElementById("generateBtn");

let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});

let upper = "QWERTYUIOPLKJHGFDSAZXCVBNM";
let lower = upper.toLowerCase();
let nums = "0987654321";
let syms = "@-*.$^";

generateBtn.addEventListener("click", () => {
    function generatePassword() {
        let password = "";
        let allChars = "";

        allChars += lowercase.checked ? lower : "";
        allChars += uppercase.checked ? upper : "";
        allChars += numbers.checked ? nums : "";
        allChars += symbols.checked ? syms : "";

        for (let i = 0; i < parseInt(sliderValue.innerText); i++) {
            password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }

        return password;
    }

    passBox.value = generatePassword();
});

copyIcon.addEventListener("click", () => {
    if (passBox.value !== "" || passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value).then(() => "");
        copyIcon.title = "Password copied";
        copyIcon.innerText = "check";
        
        setTimeout(() => {
            copyIcon.innerText = "content_copy";
            copyIcon.title = "";
        }, 2000);
    }
});