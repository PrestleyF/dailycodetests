

// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

// Examples

// b > e  = 0
// 


// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

// [1, 4]

const sequenceSum = (begin, end, step) => {
    // May the Force be with you

    if (begin === end) return begin
    if (begin > end) return 0
    

    let arr = []
    for(let i=begin; i <= end; i+=step){
        arr.push(i)
    }

    return arr.reduce( (a, b) => a + b)
}

console.log(sequenceSum(2, 6, 2), 12)
console.log(sequenceSum(1, 5, 1), 15)
console.log(sequenceSum(1, 5, 3), 5)  