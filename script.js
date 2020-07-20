
//Setting up variables to capture if the user wants to include
//certain character types inside their password
var isLowercase = document.querySelector("#lowercase");
var isUppercase = document.querySelector("#uppercase");
var isSpecial = document.querySelector("#special");
var isNumeric = document.querySelector("#numbers");
var numChars = document.querySelector("#passwordLength");
var passwordCharList = '';

//Setting up a variable to trigger click event on Generate Password Button
var generatePasswordBtn = document.querySelector(".generate-password-btn");

//Setting up a variable to return the generated password to the user
var userPassword = document.querySelector(".password")


function getPasswordCriteria () {

    if (isLowercase.checked) {
        var lowerChars = "abcdefghijklmopqrstuvwxyz";
    } else {
        lowerChars = "";
    }
    
    if (isUppercase.checked) {
        var upperChars = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
    } else {
        upperChars = "";
    }

    if (isSpecial.checked) {
        var specialChars = "!@#$%^&*()_+<>?";
    } else {
        specialChars = "";
    }

    if (isNumeric.checked) {
        var numericChars = "1234567890";
    } else {
        numericChars = "";
    }

    if (passwordCharList == "") {
        passwordCharList = "abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ!@#$%^&*()_+<>?1234567890";
    }

    var passwordCharList = lowerChars + upperChars + specialChars + numericChars;
    return passwordCharList
}

function generatePassword() {
    var charList = getPasswordCriteria()
    var password = '';

    if (charList == "") {
        charList= "abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ!@#$%^&*()_+<>?1234567890";
    }

    for (let index = 0; index < numChars.value; index++) {
            var item = charList[Math.floor(Math.random()*charList.length)];
            password += item;
        }

    if (password == '') {
        userPassword.textContent = "Please specify the number of characters between 8 and 128";
        console.log(userPassword);
    } else {
        userPassword.textContent = password;
    }
}

    


generatePasswordBtn.addEventListener("click", generatePassword);

isLowercase.addEventListener('click', getPasswordCriteria);
isUppercase.addEventListener('click', getPasswordCriteria);
isSpecial.addEventListener('click', getPasswordCriteria);
isNumeric.addEventListener('click', getPasswordCriteria);


getPasswordCriteria ();