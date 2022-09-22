//objects
//Collection of properties
// properties

//person (object) 
//properties (first name, last name, gender, class)

let person =
{
    firstname: 'Kiran', lastname: 'D', gender: 'M', age: 20, fullname: function () {
        console.log(this.firstname + this.lastname)
    }

}

console.log(person.gender)
//index
console.log(person['lastname'])

//changing the properties values / assigning new value to the property key
//object.key = 'changed value'
person.firstname = 'TOny'
person.firstname = 'stark'
person.lastname = ' TOny'
console.log(person)

//delete is used to delete the properties
//delete person.firstname
//console.log(person)

// for

for (let key in person) {
    console.log(person[key])
}
console.log(person.fullname())



