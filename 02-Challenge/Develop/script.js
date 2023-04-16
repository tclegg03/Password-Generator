// Assignment Code
var generateBtn = document.querySelector("#generate");
// declare variables
let  everything = ""
let  numbers = ["1","2","3","4","5","6","7","8","9","0"];
let  lettersUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T", "U", "V", "W", "X", "Y", "Z" ];
let  lettersLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let  characters = ["!","@","#","$","%","&","*"]



// Write password to the #password input

// dialgoue and prompts
function createpassword(){

let tostart = confirm("Select OK to Generate A Password")
if (tostart===false) alert("Click the Generate password button when ready.")
let length = prompt("Choose the length of your password. Password must be between 8 and 128 characters long.");
if (length < 8 || 128 < length || isNaN(length)){
  prompt("Please enter a valid number between 8 and 128.")}
else{
  alert("Please confirm your new password is " +  length + " characters long.")
  let uppercase = confirm("Would you like your new password to contain uppercase letters?")
    if (uppercase===true) confirm("your new password will have uppercase letters")
    everything += lettersUpper};
  let lowercase = confirm("Would you like your new password to contain lowercase letters as well?")
    if (lowercase===true) confirm("Your new passowrd will have lowercase letters.")
  let numerals = confirm("Would you like your new password to conatain numbers?")
    if (numerals===true) confirm("Your new password will contain numbers.")
  let special =confirm("Would you like your new password to contain any special characters?")
    if (special===true) confirm("Your new password will contain special characters.")
}

function writePassword(){
  let newpassword = createpassword();
  let boxpassword = document.querySelector("#password");
  boxpassword.value= newpassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
