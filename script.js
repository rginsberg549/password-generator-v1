
//Setting up variables to capture if the user wants to include
//certain character types inside their password
var isLowercase = document.querySelector("#lowercase").checked;
var isUppercase = document.querySelector("#uppercase").checked;
var isSpecial = document.querySelector("#special").checked;
var isNumeric = document.querySelector("#numbers").checked;

//Setting up a variable to trigger click event on Generate Password Button
var generatePasswordBtn = document.querySelector(".generate-password-btn");

//Setting up a variable to return the generated password to the user
var userPassword = document.querySelector(".password")


//Prompt user for preferred password length
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

function getPasswordCriteria () {
    console.log(isLowercase);
    console.log(isUppercase);
    console.log(isSpecial);
    console.log(isNumeric);

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

getPasswordCriteria ();

