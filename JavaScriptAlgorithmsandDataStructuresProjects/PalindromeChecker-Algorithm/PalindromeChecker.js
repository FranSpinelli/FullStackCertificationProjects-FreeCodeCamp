/*
 *Return true if the given string is a palindrome. Otherwise, return false.
 *A palindrome is a word or sentence that's spelled the same way both forward and backward,
 * ignoring punctuation, case, and spacing.
 */

function palindrome(str) {

    let word = str.replace(/\W|_/g, '').toLowerCase();
    let reverseWord = word.split("").reverse().join("");
    
    return word == reverseWord
  }