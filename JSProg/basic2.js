// loops and condition
// new update

/*
if else 
for 
do while
while
*/


// if else
/* 
if(cond)
{
    console.log()
}
else if (cond)
{
    console.log()
}
else
{
    console.log()
}

*/

const flag = 1000

if (flag == 11) {
    console.log('The no is satis')
}
else if (flag == 12) {
    console.log('2')
}
else if (flag == 10) {
    console.log('passed')
}
else {
    console.log('Not in ')
}


console.log('--------------------------------------')

// !

const a = true
if (!a) {
    console.log('passed')
}
else {
    console.log(a)
    console.log('failed')
}

console.log('--------------------------------------')


//while loop

/*
while(cond)
{
    console.log(0)
}

*/

/*
while (true) {
    console.log('Grep')
}
*/


// print 1 to 10


let i = 0

while (i < 10) {
    console.log(i)
    i++ //i=i+1
}

// do while

/*
do
{

}while()

*/
console.log('----------------------')
// one round of loop will definitly run even if the cond is tru or fals

k = 0
do {
    k++
} while (k < 10)
console.log(k)

// for loop 

/*
for (let i=0;i<10;i++)
{
    console.log(i)
}
*/
console.log('forfor-------------------------------------')

for (let l = 0; l <= 10; l++) {
    console.log(l)
}
console.log('---------------------------for')
// even number 3/2 = 
var n = 0
for (let o = 1; o <= 100; o++) {
    if (o % 2 == 0 && o % 5 == 0) {
        n++
        console.log(o)
        if (n == 3)
            break
    }

}










