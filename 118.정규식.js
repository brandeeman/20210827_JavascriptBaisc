// 정규식 구글 검색 : 자바스크립트 정규표현식 찾아보기
// 정규식 구글 검색 : 자바스크립트 정규식 이메일 주소

//정규식
//reqular expression

var txt = "Hello World! World! world!";

console.log(txt.replace("World", "jeremy"));
//다 바꾸고 싶은데 첫번째만 바뀐다.

var regexp = /World/g;
//World를 찾겠다.
//g : global : 다 찾겠다.

console.log(txt.replace(regexp, "Jeremy"));

var regexp = /World/gi;
//i 대소문자 구분하지 말고 다 찾아라.

console.log(txt.replace(regexp, "Jeremy"));

var str = "123abc456kkk";

var regexp1 = /[0-9]/g;
//0부터 9까지 찾겠다.

var result = str.match(regexp1); //match는 하나하나 찾아서 배열에 담는다.
console.log(result);

var str2 = "re, green, red, gree, gen, yellow, blue";
var regexp2 = /(red|green)/g;
//red 혹은 green을 찾아줘.

var result2 = str2.match(regexp2);
console.log(result2);

//

//전화번호 정규식
var tel = "010-3008-9614";
//010 숫자 - 4자리 숫자 - 4자리 숫자 
//정규식으로 똑같이 입력했는지 찾는 법

var regexp3 = /^(010)-\d{4}-\d{4}/;
//^ : 시작이 무조건 010으로 시작해야 한다.
//\d : 숫자가 나오는데 연속 4자리의 숫자가 나와야 한다.
console.log(regexp3.test(tel));

//

//email 정규식
//brandee@gmail.com
//brandee@abc.co.kr

var regexp4 = /^\w+@\w+(\.\w{2,3})+$/;
//\w : 문자를 의미. 한 개 이상. 문자로 시작
//\w{2,3} : 문자가 두자리 올 수도 있고, 3자리 올 수도 있다.

console.log(regexp4.test("seun@gmail.com"));