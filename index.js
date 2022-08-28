function isPalindrome(abba) {
  // Write your algorithm here
  let reversedWord = abba.split("").reverse().join("");

  if (abba === reversedWord){
    return true;

  } else {
    return false;
  }
}



/* 
  Add your pseudocode here
*/
//reverse the string
//check if the reversed string is equal to the original string
//if the return is true then the word is palindrome
//if return is false then the word is not palindrome

/*
  Add written explanation of your solution here
*/
//A string is a palindrome if it can be read the same from either backwards or forward
//so in this test we check if the words abbba,racecar,a,robot and ab are palindromes.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
