/*
  This function receives a strign and returns the reversed string.

  E.g. 
  'abc' => 'cba'
  'Hello World! 123' => '321 !dlroW olleH'

  Extra requests:
  1. Don't use built in array methods or string methods 
*/
function reverseString(str) {

}

/*
  This function receives a string and returns true if it is a palindrome, false otherwise.

  A palindrome is a word that is spelled the same from both ends. For examble 'abba' or 'tacocat'.

  Extra requests:
  1. Ignore the case of the letters: 'TacoCat' => true
  2. Expert - Ignore spaces: 'Taco Cat' => true
*/
function isPalindrome(str) {

}

/*
  This function receives a number and returns the reversed number.

  E.g.
  123 => 321

  Extra requests:
  1. Advanced - Can handle numeric strings (receives a numeric string and returns the reversed number): '123' => 321
  2. Advanced - Can handle decimal numbers: 1.23 => 32.1
  3. Expert - Can handle negative numbers by keeping the sign of the resulting number: -123 => -321
*/
function reverseNumber(num) {

}

/*
  This function returns all whole numbers starting at 1 up to the given number
  but replaces numbers divisible by 3 with 'fizz' and numbers divisible 
  by 5 with 'buzz'. Numbers divisible by both are replaced with 'fizzbuzz'.

  Extra tasks:
  1. Accept two extra parameters which specify which divizor is fizz and 
  which is buzz (in this order). Don't break backwards compatibility (if 
  only one param is specifiied continue to consider fizz 3 and buzz 5)
*/
function fizzBuzz(num) {

}

module.exports = {
  reverseString,
  isPalindrome,
  reverseNumber,
  fizzBuzz
}