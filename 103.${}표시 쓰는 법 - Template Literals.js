//${}표시 쓰는 법 : Template Literals

//기존 방법
function hello(name) {
    console.log("Hello" + name + ".Wlecome!"); //Hello Jeremy. Welcome!
}

function hello2(name, name2 = "Loy") {
    console.log(`Hello ${name}. Welcome! ${name2}`); //물결표시 있는 부분
}

hello2("Jeremy");