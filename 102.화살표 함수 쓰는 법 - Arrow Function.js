//화살표 함수 쓰는 법 : => Arrow Function  
//-
//Arrow Function의 특징
// function이 사라짐

//함수 선언식
function add() {

}

//함수 표현식
var add = function () {
    return x1 + x2;
};

//Arrow Function - 화살표 함수
var add = (x1, x2) => {
    return x1 + x2
};

var add = (x1, x2) => x1 + x2;
//한 줄인 경우 return 생략 가능
//한 줄인 경우 전체를 둘러싸고 있는 {}(block)도 생략 가능

//

var add2 = function () {
    var sum = x1 + x2;
    return sum;
};

var add2 = (x1, x2) => {
    var sum = x1 + x2;
    return sum;
};

//

function say(message) {};

//위와 똑같은 표현
var say = (message) => {};

//

function myFunction() {};

//위와 같은 표현
var myFunction = () => {};