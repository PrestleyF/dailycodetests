
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

function factorial(n) {
    // if input < 0 || > 12 throw RangeError
    // if input is 0 === 1

    // start the loop with the input 

    if (n < 0 || n > 12) {
        throw RangeError("This is below 0 or above 12")
    } else if (n === 0) {
        return 1
    } else {
       let total = 1
        while ( n > 0 ) {
            total = total * n
            n--
        }

        return total
        //return Array(n).fill(0).map( (x,y) => y+1).reduce((a,b) => a * b, 1)
    }

  // Calculate the factorial here
}

console.log(factorial(0), 1, "factorial for 0 is 1");
console.log(factorial(1), 1, "factorial for 1 is 1");
console.log(factorial(2), 2, "factorial for 2 is 2");
console.log(factorial(3), 6, "factorial for 3 is 6");
console.log(factorial(5), 120, "factorial for 3 is 6");
console.log(factorial(-1), "asdasd", "factorial for 0 is 1");