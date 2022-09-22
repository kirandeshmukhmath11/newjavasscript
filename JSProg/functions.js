//block of which will add two numbers
/*
function add(a, b) {
    return a + b
}
let sum = add(2, 3)
console.log(sum)
//console.log(add(2, 3))
// another method
let sumofnumber = (c, d) => c / d
console.log(sumofnumber(3, 3))

*/
// var let const
// var global let and const

const g = 'Afternoon'
g = 'hello'
if (1 == 1) {
    let g = 'Evening'
}
function add(a, b) {
    let g = 'Morning'
    console.log(g)
    return a + b
}
let addition = add(5, 6)
console.log(addition)

console.log(g)








