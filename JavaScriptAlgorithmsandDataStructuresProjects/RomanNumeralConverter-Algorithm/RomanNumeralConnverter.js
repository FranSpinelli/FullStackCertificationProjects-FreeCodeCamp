/*
 *Convert the given number into a roman numeral.
 *All roman numerals answers are provided in upper-case.
 */

function convertToRoman(num) {
    let decimalNums = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let romanNums = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

    let  romanized = ""

    for (var index = 0; index < decimalNums.length; index++) {
        while (decimalNums[index] <= num) {
            romanized += romanNums[index];
            num -= decimalNums[index];
        }
    }
    return romanized
}