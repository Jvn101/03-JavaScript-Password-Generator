// Assignment Code

//querySelectr returns the first elemet that matches a CSS selector. A CSS selector tells the broswer which HTML elements should be selected to have the CSS properties applied
var generateBtn = document
  .querySelector(".btn")
  .addEventListener("click", writePassword);

//stores generatePassword function in password variable and outputs the password in the placeholder HTML box via the querySelector
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //Inputs text value from password variable
  passwordText.value = password;
}

function generatePassword() {
  // Prompt to confirm how many characters the user would like in their password
  var confirmLength = prompt(
    "How many characters would you like your password to contain? Choose between 8 and 128 characters"
  );

  //while loop when the condition of a number between 8 and 128 it not input
  while (confirmLength < 8 || confirmLength > 128 || isNaN(confirmLength) ) {
    alert(
      "Invalid input. Password length must be between 8 and 128 characters"
    );
    confirmLength = prompt(
      "How many characters would you like your password to contain? Choose between 8 and 128 characters"
    );
  }

  // Prompt to confirm if the user would like lowercase text in their password
  var confirmLowerCase = confirm(
    "Click OK to confirm if you would like your password to contain lowercase characters?"
  );

  // Prompt to confirm if the user would like uppercase text in their password
  var confirmUpperCase = confirm(
    "Click OK to confirm if you would like your password to contain UPPERcase characters?"
  );

  // Prompt to confirm if the user would like numbers in their password
  var confirmNumericCharacters = confirm(
    "Click OK to confirm if you would like your password to contain numeric values?"
  );

  // Prompt to confirm if the user would like special characters in their password
  var confirmSpecialCharacters = confirm(
    "Click OK to confirm if you would like your password to contain special characters?"
  );

  //If the user does not select any of the character options (lowercase, uppercase, numbers, special characters) the while for loop will run. The while for loop will run until at least one of the options is selected (aka one option is true)
  while (
    confirmLowerCase === false &&
    confirmUpperCase === false &&
    confirmNumericCharacters === false &&
    confirmSpecialCharacters === false
  ) {
    //alert message
    alert(
      "You must choose at least one of the following: lowercase, uppercase, numeric, special characters"
    );

    //Run character options again for user to select. If user selects cancel to all the while loop will run again and user will be prompted to input options again
    confirmLowerCase = confirm(
      "Click OK to confirm if you would like your password to contain lower case characters?"
    );
    confirmUpperCase = confirm(
      "Click OK to confirm if you would like your password to contain upper case characters?"
    );
    confirmNumericCharacters = confirm(
      "Click OK to confirm if you would like your password to contain numeric characters?"
    );
    confirmSpecialCharacters = confirm(
      "Click OK to confirm if you would like your password to contain special characters?"
    );
  }

  //Storing all the options that can be used for each character type
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  // Declare charset variable
  var charSet = "";

  // Declare password value to be returned
  var retValue = "";

  //If the user selects ok for lowercase the option will be true.
  if (confirmLowerCase) {
    //If true the lowercase letters are added to the character set ('charset') for this rounds password. Each time the password is regenerated the charset will change depending on which options the user selects as true (ok)
    charSet = charSet + lowerCase;
  }

  //If the user selects ok for uppercase the option will be true and uppercase letters will be included in the charset variable
  if (confirmUpperCase) {
    charSet = charSet + upperCase;
  }

  //If the user selects ok for numerics the option will be true and numbers will be included in the charset variable
  if (confirmNumericCharacters) {
    charSet = charSet + numbers;
  }

  //If the user selects ok for special characters the option will be true and special characters will be included in the charset variable
  if (confirmSpecialCharacters) {
    charSet = charSet + specialCharacters;
  }

  
  for (
    var passwordIterator = 0;
    passwordIterator < confirmLength;
    passwordIterator++
  ) {
    //Random number generator. Keeps randomly generating positions and ouputting these corresponding charset values adding to the retvalue until confirmLength value is reached
    retValue =
      retValue + charSet[Math.floor(Math.random() * charSet.length)];
    
  }

  //Calling the generated password value
  return retValue;
}
