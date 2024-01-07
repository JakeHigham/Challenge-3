// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Character sets
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$&*()?";

  // Prompt for password length
  var passwordLength = prompt("Enter the desired password length (between 8 and 32 characters):");
  
  // Validate and convert the input to a number, source included in README
  passwordLength = parseInt(passwordLength, 10);

  // Checks if the input is a valid length, rejects if not
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 32) {
    alert("Please enter a valid password length between 8 and 32 characters.");
    return;
  }

  // Prompts for character set inclusion
  var includeUppercase = confirm("Include uppercase letters?");
  var includeLowercase = confirm("Include lowercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialChars = confirm("Include special characters?");

  // Builds/includes characters based on user selections
  var selectedChars = "";
  if (includeUppercase) selectedChars += uppercaseChars;
  if (includeLowercase) selectedChars += lowercaseChars;
  if (includeNumbers) selectedChars += numericChars;
  if (includeSpecialChars) selectedChars += specialChars;

  // Checks if at least one character set is selected
  if (selectedChars === "") {
    alert("Please select at least one character set.");
    return;
  }

  // Generates the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectedChars.length);
    password += selectedChars.charAt(randomIndex);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
