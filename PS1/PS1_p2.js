
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

console.log()
console.log("Testing output for Problem2 ")
console.log()
let test_expr = ['4+2', '5*7', '6-1', '9/2', '2^8'];


//testing for multiple inputs
for (i = 0; i < test_expr.length; i++) {

    let expr = test_expr[i];
    console.log(`Fomatted string input ${expr}`);

    let operator = getOperator(expr)                                          // operation expected '+'
    //console.log(operator);                                                  // return function that matches operator

    let nums = getNums(expr);                                                 // expected { left, right }
    //console.log(nums);

    // pass the values
    console.log(`${getFunction(operator)}`);
    console.log(`${expr} = ${getFunction(operator)(parseInt(nums.left), parseInt(nums.right))}`);
    console.log()

}