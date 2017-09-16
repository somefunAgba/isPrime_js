**This algorithm efficiently checks if a very large number within the maximum safe integer, 
(2^53-1) or range [0 - 9007199254740991] in javascript is a prime number. 
For smaller numbers, the check performance is extremely fast.**

See Result: https://somefunagba.github.io/isPrime_js/

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
    } else if (i % 2 === 0 || i % 3 === 0) { // if it can be divided by 2 or 3
        return false; // it is not a prime-number
    }

    // 2. Checks odd integers that cannot be divided by 3 from odd control integer, j = 5
    // and incrementing j by 6, while the test-number i  is greater than the square of j.
    // If the odd control integers j or j+2 divides i and leaves a remainder of 0, then
    // the test-number, i has failed the test, it cannot be a prime-number
    for (let j = 5; j * j <= i; j += 6) {
        if (i % j === 0 || i % (j + 2) === 0) {
                return false;
        }
    }
    return true;

}
