
// function takes string input and decorator function

const doOperation = (str, operation) => operation(str);


const breakIn_c = doOperation(
        str = "supercalifragilisticexpialidocious",
        (str) => str.split("c").join(" c").split(" ")
)

const breakIn_c2 = doOperation(
    str = "hereismycarthereismycat",
    (str) => str.split("c").join(" c").split(" ")
)



const replaceA = doOperation(
        str = "supercalifragilisticexpialidocious",
        (str) => {

        let modStr = str.toString().replace(/a/g, 'A');
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

const replaceA2 = doOperation(
    str = "hereismycarthereismycat",
    (str) => {

        let modStr = str.toString().replace(/a/g, 'A');
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


console.log();
console.log("Testing output for Problem 3");
console.log();

console.log("Part 1");
console.log(breakIn_c);
console.log(breakIn_c2)
console.log();
console.log("Part 2");
console.table(replaceA);
console.table(replaceA2);




module.exports = {doOperation, replaceA, breakIn_c, breakIn_c2, replaceA2};



