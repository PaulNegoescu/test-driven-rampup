export const tasks = {
  reverseAndAdd,
  sumOfPairs,
  shortestWords,
  wordSearch
};

/*
  The function takes an integer as an input and returns a string formatted as number of 
  additions + palindrome number found. In the below example, reverseAndAdd(195) produces 
  the string "4 9339", with "4" being the number of tries and "9339" the palindrome number.

  The function reverses the digits of the input number and adds it to the original number. 
  If the sum is not a palindrome (which means, it is not the same number from left to right 
  and right to left), repeat this procedure.

  195 (initial number) + 591 (reverse of initial number) = 786
  786 + 687 = 1473
  1473 + 3741 = 5214
  5214 + 4125 = 9339 (palindrome)

  In this particular case the palindrome 9339 appeared after the 4th addition. This method 
  leads to palindromes in a few steps for almost all of the integers.
*/
function reverseAndAdd(num) {

}

/*
  Finds the shortest word(s) in a sentence and returns them alphabetically ordered and lowercase.  
  Ie. "I have a cat" return "a i" (excludes special characters).
*/
function shortestWords(sentence) {

}

/*
  The function is given a matrix, and returns a boolean based on the condition 
  that an input string (search) is found horizontally or vertically in the matrix 
  in any direction.

  [
    [t, w, e, r, t, y, u, I, o, p],
    [a, s, d, f, g, h, j, k, e, z],
    [c, v, b, n, o, o, f, m, l, p], 
    [l, k, j, h, f,  d,  s,  a,  d, f] 
  ]
  E.g: 
  foo => true
  cat => true

*/
function wordSearch(search, matrix) {

}

/*
  The function tries to find a pair of numbers in the array that added together result 
  in the sum and returns a boolean
  .
  The array is not sorted by default and numbers might repeat in the array.
  e.g. sum = 8; arr = [1, 2, 3, 6] => false
*/
function sumOfPairs(sum, arr) {

}