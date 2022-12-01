// Assignment Code
var generateBtn = document.querySelector("#generate");
var passChars="";
var tempPassChars="";
includeSpecial=false;
isUserselected=true;
// var securePass="a6"
var finalPassword=""
 var numberOfChar=0;

// Write password to the #password input
function writePassword() {
  captureCharNum();
 if(isUserselected==true){
  charType();
  for (var i = 0; i < numberOfChar; i++) {
    var randomNumber = Math.floor(Math.random() * passChars.length);
     finalPassword += passChars.substring(randomNumber, randomNumber +1);
     
   }
 }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passChars=password;
  passwordText.value = password;
  reset();

}

var captureCharNum = function() {
  // Ask user the length of password they want
   numberOfChar= window.prompt("How many Character would you like ?");
  if (!numberOfChar) {
    isUserselected=false;
    return;
      }
  
  
     if(isNaN(numberOfChar)){
        window.alert("Enter a type of Number")
        numberOfChar= window.prompt("How many Character would you like ?");
       
           
           if(isNaN(numberOfChar)){
            alert("Please pay attention: you should enter a numerical value")
            writePassword();
          }
        }   
           
      if(numberOfChar<8 ||numberOfChar>129){
       window.alert("the number must be greater than 8 and less than 130")
       writePassword();
     

    }

  
 
} 


  var charType=function(){
    passChars=window.confirm("include special character?")
    if(!passChars){
      passChars="abcdefghijklmnopqrstuvwxyz"
    }
    else{
      passChars="abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
      includeSpecial=true;
    }
   tempPassChars= window.confirm("include uppercase ");
    if(tempPassChars && includeSpecial){
    passChars="ABCDEFGHIJKLMNOPQRSVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"
    }
      else if (tempPassChars && !includeSpecial){
        passChars="ABCDEFGHIJKLMNOPQRSVWXYZabcdefghijklmnopqrstuvwxyz"
      }
      tempPassChars= window.confirm("include Numeric value?");
      if(tempPassChars){
        passChars=passChars+"123456789"
      }

      }

  
  

    
var generatePassword = function(){
 return password= finalPassword;
 }
var reset = function(){
 numberOfChar= 0;
 passChars="";
 finalPassword="";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
