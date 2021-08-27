// 변수명을 명확히 인지한 상태에서 쓰고 싶을 때 쓰는 법 : Array Destructuring

function getScores() {
    return [70, 21, 100];
}

function getPerson() {
    return [
        "John",
        "Doe",
        ["Red", "Green", "Blue"]
    ];
}

var [firstName, lastName, [color1, color2, color3]] = getPerson();
console.log(color1);

function getCoordinates() {
    return [12.32222, 34.22222];
}

//기존
var scores = getScores();
scores[0];
scores[1];
scores[2];

//[경도, 위도]
var coodinates = GeolocationCoordinates(); //[경도, 위도]
coodinates[0]; //경도
coodinates[1]; //위도

//

var [x, y, ...args] = getScores();
console.log(x);
console.log(y);
console.log(z);

var [longitiude, latitude] = getCoordinates(); //[위도, 경도]