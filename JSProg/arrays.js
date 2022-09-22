//Arrays
// it is a colleciton elemenst

var marks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//           0  1  2  3  4  5  6  7 indices/position

console.log(marks[5])

// length of the array
//length
console.log('length = ' + marks.length)

//adding any value into array
// push()

marks.push(100) //it will be appneded at the end 
console.log(marks)

// adding at first 
// unshift()

marks.unshift(99)
console.log(marks)

// deleting the elements in the array
// pop()

marks.pop() // only delete the element at the end
console.log("deleted 100 in array " + marks)

//Slices method

let m = marks.slice(0, 3)
console.log(m)

// printing out the all array elements
var sum = 0
for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i]
}
console.log(sum)

// short cut 
// reduce
let total = marks.reduce((sum, mark) => sum + mark, 0)
console.log(total)     // 100   2       100  + 2 = 102 

// map

//let mapped = total.map(mark => mark * 3)
//console.log(mapped)

// Sorting of string and numbers

let fruits = ['banana', 'apple', 'mango', 'dragon Fruit']
//sort()
fruits.sort()
console.log(fruits)
let num = [11, 22, 06, 94, 27, 99]
num.sort()
console.log(num)

console.log(num.sort((a, b) => a - b))





