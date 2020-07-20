
//Element used to capture password length from user
var numChars = document.querySelector("#passwordLength");

//Elements used to capture password requirements from user
var isLowercase = document.querySelector("#lowercase");
var isUppercase = document.querySelector("#uppercase");
var isSpecial = document.querySelector("#special");
var isNumeric = document.querySelector("#numbers");

//Element used to generate a random password
var generatePasswordBtn = document.querySelector(".generate-password-btn");

//Element used to populate random password back to the user
var userPassword = document.querySelector(".password")

//This function is used to generate the list of characters that will be used for the password
//We grab a random number and target the index of this list
function getPasswordCriteria () {

    //Add lower case letters to the passwordChar string
    if (isLowercase.checked) {
        var lowerChars = "abcdefghijklmopqrstuvwxyz";
    } else {
        //Remove lower case letters to the passwordChar string
        lowerChars = "";
    }
    
    //Add upper case letters to the passwordChar string
    if (isUppercase.checked) {
        var upperChars = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
    } else {
        //Removes upper case letters to the passwordChar string
        upperChars = "";
    }

    //Add special characters to the passwordChar string
    if (isSpecial.checked) {
        var specialChars = "!@#$%^&*()_+<>?";
    } else {
        //Removes special characters to the passwordChar string
        specialChars = "";
    }

    //Add numbers to the passwordChar string
    if (isNumeric.checked) {
        var numericChars = "1234567890";
    } else {
        //Removes numbers to the passwordChar string
        numericChars = "";
    }
    //Generate the passwordCharlist and return it to the generatePassword function
    var passwordCharList = lowerChars + upperChars + specialChars + numericChars;

    //If users doesn't select any option, we have a default/fallback list of chars to choose from
    if (passwordCharList == "") {
        passwordCharList = "abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ!@#$%^&*()_+<>?1234567890";
    }
    
    return passwordCharList
}

function generatePassword() {
    //Store the passwordChar list into the charList variable
    var charList = getPasswordCriteria()

    //Store the passwordLength into the passwordLength variable
    var passwordLength = numChars.value;
    
    //Declare variable to store the randomly generated password
    var password = '';
    
    //Loop through the charList and pick a random index and pick a character
    //and add it to the password variable
    for (let index = 0; index < passwordLength; index++) {
            var item = charList[Math.floor(Math.random()*charList.length)];
            password += item;
        }

    //Ensure the user enters in a defined number of characters
    if (password == '') {
        userPassword.textContent = "Please specify the number of characters between 8 and 128";
    } else {
        //Return randomly generated password to the user
        userPassword.textContent = password;
    }
}

//Event listeners
generatePasswordBtn.addEventListener("click", generatePassword);
isLowercase.addEventListener('click', getPasswordCriteria);
isUppercase.addEventListener('click', getPasswordCriteria);
isSpecial.addEventListener('click', getPasswordCriteria);
isNumeric.addEventListener('click', getPasswordCriteria);