
/*
This algorithm efficiently checks if a very large number within the maximum safe integer,
(2^53-1) or range [0 - 9007199254740991] in javascript is a prime number.
For smaller numbers, the check performance is extremely fast.
*/


function isPrime(i) {
    /**
     * Author: Oluwasegun Somefun
     * Date: September 2017
     * Description:  This algorithm efficiently checks if a very large number
     * within the maximum safe integer range[0 - 9007199254740991] in javascript is a prime number.
     * For smaller numbers, the check performance is extremely fast.
     **/


    // 0. If test-number, i is a number greater than the maximum safe integer value in javascript
    // We skip any further test, and return a null.
    if (i > Number.MAX_SAFE_INTEGER) {
        console.error("\nTest number not a safe integer value in javascript;\n" +
            i + " is greater than 9007199254740991;" +
            "\nTruncation Error: Integer may not be represented correctly in browser!");

        // return "Number too big for standard PC browser!";
    }

    // 1. If test-number, i is a number less than or equals 1 or not an integer
    // or an even number, then it fails the definition of a prime-number.
    // We skip any further test, "i" is not a prime number
    if (i <= 1 || Number.isInteger(i) === false) {
        return false;
    } else if ( i <= 3) {// if it is  2 or 3, then it is a prime number
        return true;
    } else if (i % 2 === 0 || i % 3 === 0) {
        return false;
    }

    // 2. Checks odd integers that cannot be divided by 3 from 5
    // . If any of the number
    // in this range divides i and leaves a remainder of 0, then
    // our control variable j becomes 1, the test-number has failed the test,
    // it cannot be a prime-number
    for (let j = 5; j * j <= i; j += 6) {
        if (i % j === 0 || i % (j + 2) === 0) {
                return false;
        }
    }
    return true;

}