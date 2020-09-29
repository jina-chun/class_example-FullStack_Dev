
// function takes string input and decorator function

const doOperation = (str, operation) => operation(str);

console.log();
console.log('Testing output for Problem 3:');
console.log();


const breakIn_c = doOperation(
    "supercalifragilisticexpialidocious",
    (str) => str.split("c").join(" c").split(" ")
    )
//console.log(`${breakIn_c}`);
console.log('Part 1: break in character c');
console.log(breakIn_c);
console.log()


const replaceA = doOperation(
    "supercalifragilisticexpialidocious",
    (str) => {

        let modStr = str.toString().replace(/a/g, 'A');
        console.log('Part 2: replace all a with A')
        //console.log(`${modStr}`);

        let numA = modStr.match(/A/g).length;
        //console.log(numA);

        let ret = {
            originalString: str,
            modifiedString: modStr,
            numberReplaced: numA,
            length: modStr.length
        }

        return ret;

    });

console.table(replaceA);


