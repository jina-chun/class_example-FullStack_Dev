// referenceStr.localeCompare(compareString[, locales[, options]])

// take a string input
// returns letters in reversed alphabetical order

let test = "supercalifragilisticexpialidocious";

const revAlpha = (text) => text.split("").sort((a, b) => b.localeCompare(a, 'en', {ignorePunctuation:true})).join("");

console.log();
console.log(`Testing output for Problem 1: ${revAlpha(test)}`);

