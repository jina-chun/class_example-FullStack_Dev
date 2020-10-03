const {revAlpha} = require('./PS1_p1');
const {getFunction, getOperator, getNums } = require('./PS1_p2');
const {breakIn_c, replaceA, breakIn_c2, replaceA2} = require('./PS1_p3');

//const {describe, it} = require('mocha');
const describe = require('mocha').describe
const {expect} = require('chai');


// testing problem 1
let p1_test_ans = "xuutsssrrppoollliiiiiiigfeedcccaaa";
let p1_test2_ans = "zyxwvutsrqponmlkjihgfedcba!!!!!";
let str1 = "supercalifragilisticexpialidocious";

describe('Testing for Problem 1', () => {
    it('should return xuutsssrrppoollliiiiiiigfeedcccaaa', () => {
        console.log();
        console.log("Problem 1")
        expect(revAlpha(str1)).to.equal(p1_test_ans);
        console.log(`Original string "${str1}" reversed to: ${revAlpha(str1)}`);

    })

    it ('should return string in reversed alphabetical order', () => {
        let str2 = "abv!!wxyzn!!!opqrstuijklmcdefgh";
        expect(revAlpha(str2)).to.equal(p1_test2_ans);
        console.log(`Original string "${str2}" reversed to: ${revAlpha(str2)}`);
        console.log();
    })

});



// testing problem 2
let p2_test = ['4+2', '5*7', '6-1', '9/2', '2^8'];

describe("Testing for Problem 2", () => {
    it('should return addition operator function', () => {
        console.log("Problem 2")
        let expr_0 = getFunction(getOperator(p2_test[0]));
        expect(expr_0.toString()).to.equal("(left, right) => left + right");
        console.log(`${p2_test[0]} = ${expr_0}`);

    })

    it("should return multiplication operator function", () => {
        let expr_1 = getFunction(getOperator(p2_test[1]));
        expect(expr_1.toString()).to.equal("(left, right) => left * right");
        console.log(`${p2_test[1]} = ${expr_1}`);
    })

    it ("should return subtraction operator function", () => {
        let expr_2 = getFunction(getOperator(p2_test[2]));
        expect(expr_2.toString()).to.equal("(left, right) => left - right");
        console.log(`${p2_test[2]} = ${expr_2}`);
    })

    it ("should return division operator function", () => {
        let expr_3 = getFunction(getOperator(p2_test[3]));
        expect(expr_3.toString()).to.equal("(left, right) => left / right");
        console.log(`${p2_test[3]} = ${expr_3}`);
    })

    it ("should return power operator function", () => {
        let expr_4 = getFunction(getOperator(p2_test[4]));
        expect(expr_4.toString()).to.equal("(left, right) => left ^ right");
        console.log(`${p2_test[4]} = ${expr_4}`);
        console.log();
    })
})



// testing for problem 3

let p3_test1_ans = {
    originalString: 'supercalifragilisticexpialidocious',
    modifiedString: 'supercAlifrAgilisticexpiAlidocious',
    numberReplaced: 3,
    length: 34
}

let p3_test2_ans = {
    originalString: 'hereismycarthereismycat',
    modifiedString: 'hereismycArthereismycAt',
    numberReplaced: 2,
    length: 23
}



let str3 = "hereismycarthereismycat";
//let str4 = "supercalifragilisticexpialidocious";



describe("'Testing for Problem 3 ", () => {
    it ("should break in character c", () => {
        console.log("Problem 3 Part 1: break String at character c")
        expect(breakIn_c).to.eql(['super', 'califragilisti', 'cexpialido', 'cious']);
        console.log(`Original string "${str1}" break in c`);
        console.log(breakIn_c)
        console.log();

    })

    it ("should break in character c", () => {
        //console.log(breakIn_c);
        expect(breakIn_c2).to.eql(['hereismy', 'carthereismy', 'cat']);
        console.log(`Original string "${str3}" break in c`);
        console.log(breakIn_c2);
        console.log();

    })



    it ("should replace all a to A", () => {
        expect(replaceA).to.be.eql(p3_test1_ans);
        console.log("Part 2: Replaced all a to A");
        console.table(replaceA);
    })

    it ("should replace all a to A", () => {
        expect(replaceA2).to.be.eql(p3_test2_ans);
        console.table(replaceA2);
    })

})






