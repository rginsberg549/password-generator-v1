var generatePasswordBtn = document.querySelector(".generate-password-btn");
var userPassword = document.querySelector(".password")


function getPasswordLength() {
     //Get users input to determing the length of the password
     //Validates that input is between 8 chars and 128 chars
     var passwordLength = prompt("How many characters whould you like your password to be?");
     if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Must be a number that is greater than 8 and less than 128");
        getPasswordCriteria()
        }
    return passwordLength
}

function generatePassword() {
    var charList = "abcdefghijklmopqrstuvwxyz".split('')
    var number = getPasswordLength();
    var password = "";

    for (let index = 0; index < number; index++) {
        var item = charList[Math.floor(Math.random()*charList.length)];
        password += item
    }

    userPassword.textContent = password;
}


generatePasswordBtn.addEventListener("click", generatePassword);

