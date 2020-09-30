// referenceStr.localeCompare(compareString[, locales[, options]])

// take a string input
// returns letters in reversed alphabetical order
const revAlpha = (text) => text.split("").sort((a, b) => b.localeCompare(a, 'en', {ignorePunctuation:true})).join("");



let str = "supercalifragilisticexpialidocious";
let str2 = "abv!!wxyzn!!!opqrstuijklmcdefgh";

console.log();
console.log('Testing output for Problem 1:');
console.log(`Original string ${str} reversed to: ${revAlpha(str)}`);
console.log(`Original string ${str} reversed to: ${revAlpha(str2)}`);
console.log();


module.exports =  {revAlpha};
