//Object Literal Syntax Extension(참고)
//이런 형식으로 쓸 수도 있다.

var firstName = "John";
var lastName = "Doe";

var person1 = {
    firstName: "John",
    lastName: "Doe"
}

var person1 = {
    firstName: firstName,
    lastName: lastName
}

//person[fir]

var type = "student";
var score = {
    [type]: "John Doe",
    //같은 말  : student: "John Doe",
    score: 95
};