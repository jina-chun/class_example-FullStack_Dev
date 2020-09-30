
// function takes formatted string as an input and return a function implementation
// example :  input : ‘8%3’ and  returns : (left, right) => left % right

const getFunction = (operator) => {

    switch (operator) {
        case '+':
            return (left, right) => left + right;           //console.log(`${left} + ${right}`);

            break;
        case '-':
            return (left, right) => left - right;           //console.log(`${left} - ${right}`);
            break;

        case '*':
            return (left, right) => left * right;           //console.log(`${left} * ${right}`);
            break;

        case '/':
            return (left, right) => left / right;           //console.log(`${left} / ${right}`);
            break;

        case '^':
            return (left, right) => left ** right;           //console.log(`${left} ^ ${right}`);
            break;
    }
}


const getOperator = expression => {
    ret_arr = expression.split("");
    return ret_arr[1];
}


const getNums = expression => {
    ret_arr = expression.split("");
    let pair = {
        left: ret_arr[0],
        right: ret_arr[2]
    };
    return pair;
}


console.log("Testing output for Problem2 ");
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


module.exports = {getFunction, getNums, getOperator};