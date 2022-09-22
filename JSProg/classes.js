// classes only es6, let and  const 

//classes are the entity which holds the details/data

class person {
    age = 20
    gender = 'Male'
    get addn() {
        let a = 200
        let b = 3
        return a * b
    }
}
let per = new person()
console.log(per.gender)
console.log(per)
console.log(per.addn)