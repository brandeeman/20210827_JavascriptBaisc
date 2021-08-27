//parameter가 몇 개가 들어가든 상관없게 만드는 법 : ...nums
//Rest Parameter :파라미터로 전달받는 데이터가 몇 개인지 모를 때 쓸 수 있다. 

function add(x1, x2) {
    return x1 + x2;
}

function add(x1, x2, x3) {
    return x1 + x2 + x3;
}

function add(x1, x2) {
    return x1 + x2;
}

function add(...nums) {
    //점을 3개 붙여준다. 파라미터가 몇 개가 들어오든 상관없다. 

    var sum = 0;
    for (var n of nums) {
        sum += n;
    }
    return sum;
}

console.log(add(2, 5, 3, 7, 43, 21));