var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function generatePassword() {
  // Prompt for password length
  var passwordLength = parseInt(
    window.prompt("How many Character would you like ?"),
    10
  );
  // Prompt for password length
  // var passwordLength = prompt("Enter password length (must be between 8 and 128 characters):");

  // Check if user cancelled prompt or entered invalid input
  if (
    !passwordLength ||
    isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128
  ) {
    alert("password length must be between 8 and 128.");
    return "";
  }

  // Prompt for character types to include
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialChars = confirm("Include special characters?");

  // Check if user selected at least one character type
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumbers &&
    !includeSpecialChars
  ) {
    alert("Please select at least one character type.");
    return "";
  }

  // Generate a password that meets the selected criteria
  var password = "";
  var availableChars = "";
  if (includeLowercase) {
    availableChars += "abcdefghijklmnopqrstuvwxyz";
    password += getRandomChar("abcdefghijklmnopqrstuvwxyz");
  }
  if (includeUppercase) {
    availableChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    password += getRandomChar("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (includeNumbers) {
    availableChars += "0123456789";
    password += getRandomChar("0123456789");
  }
  if (includeSpecialChars) {
    availableChars += "!@#$%^&*()_+-=[]{}\\|;:'\",./<>?";
    password += getRandomChar("!@#$%^&*()_+-=[]{}\\|;:'\",./<>?");
  }
  for (var i = password.length; i < passwordLength; i++) {
    password += getRandomChar(availableChars);
  }

  return password;
}

// Generate a random character from a given character set
function getRandomChar(charSet) {
  return charSet.charAt(Math.floor(Math.random() * charSet.length));
}

// Event listener for the "Generate Password" button

generateBtn.addEventListener("click", function () {
  passwordText.value = "";
  var password = generatePassword();
  if (password) {
    passwordText.value = password;
  }
});
