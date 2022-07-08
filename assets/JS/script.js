let allChar = "";


//generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = '!@#$%^&*()<>?,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

//function to create password
function generatePassword() {
  allChar = "";
  console.log("btn was clicked")
  let pwdLength = prompt("How long would you like your password to be? (8-128)");
  if (pwdLength < 8 || pwdLength > 128 || isNaN(parseInt(pwdLength))) {
    alert("Please enter a number between 8 and 128");
  } else {
    let lowerCase = confirm("Would you like to include lowercase letters?");
    if (lowerCase) {
      allChar += getRandomLower();
    }
    let upperCase = confirm("Would you like to include uppercase letters?");
    if (upperCase) {
      allChar += getRandomUpper();
    }
    let numbers = confirm("Would you like to include numbers?");
    if (numbers) {
      allChar += getRandomNumber();
    }
    let symbols = confirm("Would you like to include symbols?");
    if (symbols) {
      allChar += getRandomSymbol();
    }
    if (!lowerCase && !upperCase && !numbers && !symbols) {
      alert("Please select at least one character type");
    }
    let password = '';
    for (let i = 0; i < pwdLength; i++) {
      password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    return password;
  }
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
console.log(generateBtn);
// on multiple clicks, clear the password




