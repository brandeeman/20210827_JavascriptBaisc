//배열, 문자열같은 형태의 데이터를 요소 하나 하나 모두 분리해서 사용할 수 있게 해주는 법 : ...cd //Spread Operator

var arr1 = [4, 5, 6];
var arr2 = [1, 2, 3]; //1,2,3
var arr3 = [...arr2, ...arr1];

var cd = "CD";
var alphabet = ["A", "B", ...cd]; // A B C D
//C와 D를 분해해서 두 개로 만들어 준다. 

var cd = "CDEFG";
var alphabet = ["A", "B", ...cd]; // A B C D E F G
//C, D, E, F, G 분해해서 배열한다. 