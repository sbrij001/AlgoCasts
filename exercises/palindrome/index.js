// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// solution 1

function palindrome(str){
	let reversed = str.split("").reverse().join("");
	console.log(str)
	console.log(reversed)
	return str === reversed
};

function palindrome(str){
	let reversed = "";
	for(char of str){
		reversed = char + reversed
	}
	if(reversed === str){
		return true
	}else{
		return false
    }
};

module.exports = palindrome;
