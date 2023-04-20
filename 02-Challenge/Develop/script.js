// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var characters = ["!", "@", "#", "$", "%", "&", "*"];
  var PasswordOptions = [];

  let tostart = confirm("Select OK to Generate A Password")

  var elemnts;
  elemnts = prompt("Choose the length of your password. Password must be between 8 and 128 characters long.");
  elemnts = parseInt(elemnts)
  while (elemnts < 8 || 128 < elemnts || isNaN(elemnts)) {
    elemnts=prompt("Please enter a valid number between 8 and 128.")
    elemnts=parseInt(elemnts)
  }
   
    alert("Please confirm your new password is " + elemnts + " characters long.");
  var uppercase = confirm("Would you like your new password to contain uppercase letters?");
 
  var lowercase = confirm("Would you like your new password to contain lowercase letters as well.");
 
  var numerals = confirm("Would you like your new password to conatain numbers?");
 
  var special = confirm("Would you like your new password to contain any special characters?");
 
  if (uppercase) {
    PasswordOptions = PasswordOptions.concat(lettersUpper);
  };
  if (lowercase) {
    PasswordOptions = PasswordOptions.concat(lettersLower);
  };
  if (numerals) {
    PasswordOptions = PasswordOptions.concat(numbers);
  };
  if (special) {
    PasswordOptions = PasswordOptions.concat(characters);
  };
  if(
    uppercase=== false &&
    lowercase=== false &&
    special=== false&&
    numerals===false
  ){
  confirm("Must choose at least one option to generate a password.");
  generatePassword();
  // display new password
  }
  
  for( let i = 0; i < elemnts; i++){
    var mke = [Math.floor(Math.random() + PasswordOptions.length)]
   
    var newPassword = mke += elemnts;
  }
return(newPassword);

};

function createPassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value= password;
};

generateBtn.addEventListener("click", createPassword());


// to gen a character look at 03 java inst 11 on arrays. 
// save character like in the "if" statements. (dont leave out line 9)
// return what was saved.  do not return "mke" create new var. 