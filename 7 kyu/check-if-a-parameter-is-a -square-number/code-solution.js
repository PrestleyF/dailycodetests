// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

//my solution 
function isSquare(n){
    return Math.sqrt(n) % 1 === 0
}