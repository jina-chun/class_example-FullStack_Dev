const {revAlpha} = require('./PS1_p1');
const {getFunction, getOperator, getNums } = require('./PS1_p2');
const {breakIn_c, replaceA} = require('./PS1_p3');

const {describe, it} = require('mocha');
const {expect} = require('chai');


// testing problem 1

let p1_test = "supercalifragilisticexpialidocious";
let p1_test_ans = "xuutsssrrppoollliiiiiiigfeedcccaaa";
let p1_test2 = "abv!!wxyzn!!!opqrstuijklmcdefgh"
let p1_test2_ans = "zyxwvutsrqponmlkjihgfedcba!!!!!"







console.log(`Testing output for Problem 1: ${revAlpha(p1_test)}`);



// testing problem 2

console.log("Testing output for Problem2 ")
console.log()
let p2_test = ['4+2', '5*7', '6-1', '9/2', '2^8'];


//testing for multiple inputs
for (i = 0; i < p2_test.length; i++) {

    let expr = p2_test[i];
    console.log(`Formatted string input ${expr}`);

    let operator = getOperator(expr)                                          // operation expected '+'
    //console.log(operator);                                                  // return function that matches operator

    let nums = getNums(expr);                                                 // expected { left, right }
    //console.log(nums);

    // pass the values
    console.log(`${getFunction(operator)}`);
    console.log(`${expr} = ${getFunction(operator)(parseInt(nums.left), parseInt(nums.right))}`);
    console.log()

}


// testing for problem 3

console.log();
console.log('Testing output for Problem 3:');
console.log();
console.log('Part 1: break in character c');
console.log(breakIn_c);
console.log()
console.log('Part 2: replace all a with A')
console.table(replaceA);



