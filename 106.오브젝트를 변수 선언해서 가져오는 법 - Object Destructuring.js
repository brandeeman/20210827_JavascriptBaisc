//오브젝트를 변수 선언해서 가져오는 법 : Object Destructuring

//함수 선언. 객체 return
function getPerson() {
    return {
        firstName: "John",
        lastName: "Doe",
        age: 37,
        email: "john@gmail.com",
        city: "jeju-si",
        country: "Republic of korea"
    }
}

//기존 방법
var person = getPerson();
console.log(person.firstName);
console.log(person.lastName);

//Object Destructuring
var {
    firstName,
    lastName
} = getPerson();

console.log(firstName);
console.log(lastName);