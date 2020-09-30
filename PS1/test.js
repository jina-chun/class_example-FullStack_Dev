const {revAlpha} = require('./PS1_p1');
const {getFunction, getOperator, getNums } = require('./PS1_p2');
const {breakIn_c, replaceA, breakIn_c2, replaceA2} = require('./PS1_p3');

//const {describe, it} = require('mocha');
const describe = require('mocha').describe
const {expect} = require('chai');


// testing problem 1
let p1_test_ans = "xuutsssrrppoollliiiiiiigfeedcccaaa";
let p1_test2_ans = "zyxwvutsrqponmlkjihgfedcba!!!!!";

describe('Testing for Problem 1', () => {
    it('should return xuutsssrrppoollliiiiiiigfeedcccaaa', () => {
        let p1_test = revAlpha("supercalifragilisticexpialidocious");
        expect(p1_test).to.equal(p1_test_ans);
    })

    it ('should return string in reversed alphabetical order', () => {
        let p1_test2 = revAlpha("abv!!wxyzn!!!opqrstuijklmcdefgh");
        expect(p1_test2).to.equal(p1_test2_ans);
    })

});




// testing problem 2

let p2_test = ['4+2', '5*7', '6-1', '9/2', '2^8'];

describe("Testing for Problem 2", () => {
    it('should return addition operator function', () => {
        let expr_0 = getFunction(getOperator(p2_test[0])).toString();
        expect(expr_0).to.equal("(left, right) => left + right");
    })

    it("should return multiplication operator function", () => {
        let expr_1 = getFunction(getOperator(p2_test[1])).toString();
        expect(expr_1).to.equal("(left, right) => left * right");
    })

    it ("should return subtraction operator function", () => {
        let expr_2 = getFunction(getOperator(p2_test[2])).toString();
        expect(expr_2).to.equal("(left, right) => left - right");
    })

    it ("should return division operator function", () => {
        let expr_3 = getFunction(getOperator(p2_test[3])).toString();
        expect(expr_3).to.equal("(left, right) => left / right");
    })

    it ("should return power operator function", () => {
        let expr_4 = getFunction(getOperator(p2_test[4])).toString();
        expect(expr_4).to.equal("(left, right) => left ** right");
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




describe("'Testing output for Problem 3 ", () => {
    it ("should break in character c", () => {
        //console.log(breakIn_c);
        expect(breakIn_c).to.eql(['super', 'califragilisti', 'cexpialido', 'cious']);
    })

    it ("should break in character c", () => {
        //console.log(breakIn_c);
        expect(breakIn_c2).to.eql(['hereismy', 'carthereismy', 'cat']);
    })



    it ("should replace all a to A", () => {
        expect(replaceA).to.be.eql(p3_test1_ans);
    })

    it ("should replace all a to A", () => {
        expect(replaceA2).to.be.eql(p3_test2_ans);
    })

})






