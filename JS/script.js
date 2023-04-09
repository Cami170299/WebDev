// Note Js is Case sensitive

/*
This is a 
multi-line 
comment
*/


/*THE BASICS*/


// Getting Date and time
function dateAndTime(){
    document.getElementById('demo').innerHTML = Date();
};
//Change text
function changeText(){
    document.getElementById('cText').innerHTML = 'For this one.';
};
// change the color
function changeColor(){
    document.getElementById('colorText').style.color = 'red';
};
// hide a text
function hide(){
    document.getElementById('hideText').style.display = 'none';
};
// do an operation
function operation(){
    var x = Number(document.getElementById('varX').innerHTML);
    var y = Number(document.getElementById('varY').innerHTML);
    var z = x + y;
    console.log(z)
    document.getElementById('result').innerText = z;
}


/*TYPES OF VARIABLES*/

//note: a block is ex: if statement, while loop, etc...
var x = 5; //Function Scope = is an accessable variable out of a block || can be re-declared
let y = 10; //Block Scope = Is a variable only available on a block  || cannot be re-declared
const p = 3; //Is a variable that will never change

/*OPERATORS*/

{
    //sum
    let a = 5;
    let b = 7;
    var z = a + b;
    console.log(z)

    //rest
    var z = a - b
    console.log(z)

    //mul
    var z = a * b
    console.log(z)

    //div
    var z = a / b
    console.log(z)

    //module
    var z = a % b 
    console.log(z)

    //incrementing
    var z = a++
    console.log(z)

    //Decreasing 
    var z = a--
    console.log(z)

    //Exponent
    var z = a ** 3
    console.log(z)
    var z = Math.pow(x,3)
    console.log(z)

}