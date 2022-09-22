//var m = Array(6)
var m = new Array(20, 30, 40, 50, 60, 70)
var l = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10]
console.log(l[6])
console.log('type of indice 5 of array (m) is ', typeof (m[5]))

console.log('Length of array is ', l.length)

// adding new element
l.push(12)//append at the end
console.log(l)

l.pop()//pop the last element
console.log(l)

l.unshift(100)
console.log(l)// unshift (adding new element at the start)

//Finding index of the array (indexof method)

console.log(l.indexOf(2))

//include

console.log(l.includes(110))

//slice
console.log(l.slice(0, 6))

for (i = 0; i < l.length; i++) {
    console.log(l[i])
}