// Note Js is Case sensitive

/*
This is a 
multi-line 
comment
*/


/*THE BASICS*/

{
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
}








/*TYPES OF VARIABLES*/

{
    //note: a block is: if statements, while loops, etc...
    var x = 5; //Function Scope = is an accessable variable out of a block || can be re-declared
    let y = 10; //Block Scope = Is a variable only available on a block  || cannot be re-declared
    const p = 3; //Is a variable that will never change
}








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

    //assignment operators
    a += b // is the same as x = x + y you can do this with basically any operator

}










//DATATYPES

{
    /*
    Strings
    int
    float 
    bigint
    boolean 
    Undefined 
    Null
    Symbol 
    */

    let myCar = 'Volvo' //String
    let myFloat = 12.45; // this is a Float 
    let myInt = 12 // this is a Int
    let myExp = 123e4 //this is a 123 followed by exponen to 4 ceros
    let myBigInt = BigInt("123456789012345678901234567890");
    let myBoolean = true; // this is a boolean value True or False
    let myundef; // this is an Undefined variable
    
    //Dinamic datatypes

    let x; //Is undefined
    console.log(x)
    x = 5; //Now is 5
    console.log(x)
    x = 'Jhon' //Now is 'Jhon'
    console.log(x)
    

}


//OBJECT DATATYPES
{
    /*
    Object
    array 
    date
    */

    let myArray = ['Saab', 'Volvo', 'BMW'] // this is an Array
    let myObject = { // This is an Object 
        firstName:'Jhon', 
        lastName:'Doe', 
        age:50
    }
}












//FUNCTIONS 

{
    function myFirstFunction(x,y){ //Here it takes the 2 variable applied to that function
        return x * y;           // Function returns the product of x and y
    };
    console.log(myFirstFunction(4,3));
    
    //Example
    function celToFar(celcius){
        let f = (celcius*9/5) + 32; //In this case 'f' is a local variable.
        return f;
    };
    console.log(21+' Celcius in F is: '+celToFar(21));
}








// OBJECTS PROPERTIES AND METHODS

{
    const person = { //The person is the obeject
        firstName:'Jhon', // 'firstName' is its first property and 'Jhon' is the value of that property
        lastName:'Doe',
        age:50,
        profession:'Doctor',
    
        introduce: function(){ //this is a method Make note this is an empty function
            return 'My name is ' + this.firstName + ' ' + this.lastName;
        },
        doSurgery: function(a,b){
            let z = a * b;
            return 'I did ' + a + ' x ' + b + ' and after the surgery is now ' + z;
        }
    };
    
    //You can retreive a object property in different ways like this;
    console.log(person.firstName); // the output of this is 'Jhon'
    console.log(person['profession']); // this is a different way the value of a property: output is 'Doctor'
    
    console.log(
        person.introduce() // Note is required to use ( ) in order to execute a function method
    );
    
    console.log(
        person.doSurgery(3,6)
    );
}







// EVENTS

{
    /*

    Onchange -- An HTML element has been changed
    Onlcick -- The user clicks an HTML element
    onmouseover -- The user moves the mouse over an HTML element
    onmouseout -- The user moves the mouse away from an HTML element
    onkeydown -- The user pushes a keyboard key
    onload -- The browser has finished loading the page

    */
}











// STRINGS

{
    let k = 'adlibfbviaebibibzdiv lhsdblasblhb';
    let l = k.length; // String lenght
    console.log('The lenght of the string is ' +l); // String addition

    //string as an object
    let x = 'Jhon '; // A normal String
    let y = new String('Jhon') // A string as an object
    console.log(typeof x + ' || ' + typeof y); // How to find the data type
    console.log(x==y); // This is true due that has the same value
    console.log(x===y) // This will be false becuase is not the same data type

    //NOTE : When comparing 2 JS object the return will be always false


    //String methods

    // slice();
    let string = 'Hello Everyone, I am Camilo';
    let part = string.slice(0,8); // slice(location1, endOfLocation2)
    console.log(part); // NOTE : Is possible to use negative integers 

    // repalce();
    let text = 'My name is Jhon, jhon';
    let rep = text.replace(/Jhon/ig, 'Camilo'); // replace methos is Case Sensitive || to make it nonsensitive you can ise /text/i
    // and /text/g to reaplace all the matches
    console.log(text); // the text will still be the same
    console.log(rep); // but the rep variable is now the new version

    //toUpperCase(); || toLowerCase();
    let upperLower = 'This is a text.'
    let upper = upperLower.toUpperCase();
    console.log(upper)
    let lower =  upperLower.toLowerCase();
    console.log(lower)

    //contact()
    let text1 = 'Hello';
    let text2 = 'World';
    let text3 = text1.concat(' ' + text2); //Joint 2 strings by contact
    console.log(text3);

    //trim()
    let toTrim = '    Hello   '; //trim will get rid of the spaces in a string, at the end or the beggining 
    let trimed = toTrim.trim();
    console.log(toTrim.length);
    console.log(trimed.length);

    //padStart() || padEnd()
    let myLet = 5;
    let myStr = myLet.toString();
    let pads = myStr.padStart(5,'X'); // output XXXX5
    console.log(pads);
    let pade = myStr.padEnd(4,'X');  //output 5XXX
    console.log(pade);

    //charAt();
    let charText = 'This is an example'
    console.log(charText.charAt(11)) //It will find the letter at the location 11 

    //split();
    let splitText = 'My name is, Camilo'
    let splitArray = splitText.split(','); // Use the parameter to split the text and now the string is an array
    console.log(splitArray[0]) // output: My name is
    console.log(splitArray[1]) // output: Camilo 

}











//STRING SEARCH METHODS

{
    //indexOf() || lastIndexOf()
    let locateText = 'Banana, Pineaple, Strawberry, Pineaple';
    let locatedIndex = locateText.indexOf('Pineaple'); // This will find the location of the index of the character on the string 
    console.log(locatedIndex);
    let locatedLastIndex = locateText.lastIndexOf('Pineaple',10); // the socond paramether is a start location to look for a match
    console.log(locatedLastIndex); // tell the position of the last SAME item on a list

    //search(); -- is exactly the same as indexOf();
    let searchString = 'Banana, Strawberry, Pineaple, Banana';
    let searchStr = searchString.search('Banana'); // Show the position of Banana 1st character
    console.log(searchStr);

    //match();
    let matchingText = "The rain in SPAIN stays mainly in the plain"; 
    const matArr = matchingText.match(/ain/ig); //Match all the time there is a character 
    console.log( 'There are: ' + matArr.length + ' matches of "ain" on (' + matchingText + ')');

    //matchAll();
    let matchallText = "I love cats. Cats are very easy to love. Cats are very popular.";
    const matchingAll = matchallText.matchAll(/cats/ig);
    console.log(Array.from(matchingAll));

    //Includes();
    let IncludesText = "Hello world, welcome to the universe.";
    console.log(IncludesText.includes("world")); 
    console.log(IncludesText.includes("Bye")); 

    //startsWith(); || endsWith();
    let startText = "Hello world, welcome to the universe.";
    console.log(startText.startsWith("Hello"));
    let endsText = "Hello world, welcome to the universe.";
    console.log(endsText.startsWith("world", 5));
}









    //FORMATED STRINGS

{

    const human1 = {
        fname : 'Jhon',
        lname : 'Doe',
        age : 50
    }
    console.log(`My name is ${human1.fname + ' ' + human1.lname}`)
    
    function displayUsersNAme(){
        let fNameUser = document.getElementById('fName').value;
        let greettingUser = `<h1 style="color: red;font-size: 5vw;">Welcome to this Web site ${fNameUser}</h1>`
        document.getElementById('display_greeting').innerHTML = greettingUser;
    };

}






//NUMBERS

{
    // JavaScript uses the + operator for both addition and concatenation.
    var x = 999999999999999;   // x will be 999999999999999
    var y = 9999999999999999n;  // y will be 10000000000000000 

    let xExp = 123e5;    // 12300000
    let yNExp = 123e-5;   // 0.00123 

    var x = 10; // int
    var y = 5;
    var z = '12'; // string
    var v = '7'

    //NOTE: JavaScript uses the + operator for both addition and concatenation.

    x + y //15

    y + v //127

    x + z //1012

    z + x //1210

    x + y + z //1512

    // JavaScript will try to convert strings to numbers in all numeric operations:

    z / v //This will work

    z * v //This will work

    z - v //This will work

    x / v  //Even this will work !!!

    // NaN not a number 

    var nanNumber = NaN;
    console.log(`NaN type is classified as: ${typeof nanNumber}`);

    // BIG INT, to define a Bigint you can use a n at the end or BigInt()

    let bigIntEx = BigInt(834);

    // You cannot use big int with another dqta types 

    // bigIntEx * 4 // ERROR
    //In order to performthe operation you will need to change the type 

    Number(bigIntEx) * 4;

    //MAX AND MIN SAFE INTEGERS

    let max = Number.MAX_SAFE_INTEGER; // 9007199254740991
    let min =  Number.MIN_SAFE_INTEGER // - 9007199254740991

}




//NUMBER METHODS

{
    //Number.isInteger();

    Number.isInteger(2); //true
    Number.isInteger(2.34); //false

    //isSafeInteger();
    
    Number.isSafeInteger(10); //true
    Number.isSafeInteger(12345678901234567890n); //false due that is too long

    //toString();

    let xString = 4;
    console.log(typeof xString);
    let sStringc = xString.toString();
    console.log(typeof sStringc); // converts the number on a string

    //toExponential();

    let x = 9.6562093480248908;
    console.log(x.toExponential())
    console.log(x.toExponential(1))
    console.log(x.toExponential(2))
    console.log(x.toExponential(4)) // Scientific exponential 
    
    //toFixed();

    let expRed = 39.2398234234;
    console.log(expRed.toFixed())
    console.log(expRed.toFixed(1))
    console.log(expRed.toFixed(2))
    console.log(expRed.toFixed(3)) // how the amount of exponential ona float number

    // toPrecision(); it will show the precise number you state to show

    let presC = 232.12344;
    console.log(presC.toPrecision()); // 232.12344
    console.log(presC.toPrecision(2)); // 2.3e+2 
    console.log(presC.toPrecision(3)); // 232 
    console.log(presC.toPrecision(4));
    console.log(presC.toPrecision(5));

    //parseInt(); converse strings into numbers

    let pInt = '132.34';
    let nowN = parseInt(pInt)
    console.log(typeof pInt);
    console.log(typeof nowN);

}


//JS ARRAYS 

{
    //a simple array 
    const myCars = [ // REMEBER Arrays are objects
        'Saab',
        'Volvo',
        'BMW'
    ];
    console.log(typeof myCars); // Make note this is a object


    //add elements to an array 
    myCars[3] = 'Chevy'; //NOTE: Adding elements in this way can create 'holes' in the array.
    console.log(myCars)

    //Accessing a array element 
    console.log(myCars[0]);
    console.log(typeof myCars[0]);

    //Changing an array element
    myCars[0] = 'Mazda';
    console.log(myCars);

    //Arrays can be objects and store more than just simple data 
    const myMulArr = [];
    myMulArr[0] = Date.now;
    myMulArr[1] = function hello(name){alert(`Welcome back ${name}`)};
    myMulArr[2] = myCars
    console.log(myMulArr);

    //lenght(); property
    let totalLenghtArr = myCars.length;
    console.log(totalLenghtArr);

    //Looping an array 
    let textLoop = '<ul>';
    for (let i = 0; i < myCars.length ; i++){
        textLoop += `<li> ${myCars[i]} </li>`;
    }    
    textLoop += '<ul/>'
    document.getElementById('Looping').innerHTML = textLoop;

    // .forEach()
    let textforeach = '<ul>';
    myCars.forEach(myloopFunct);
    textforeach += '</ul>'

    function myloopFunct(eachcar){
        textforeach +=  `<li>${eachcar}</li>`
    };
    document.getElementById('forEachdis').innerHTML = textforeach;

    //Adding an array element with push()

    const pushArr = ['Banana','Melon'];
    pushArr.push('Lemon');
    console.log(pushArr);










    function binary(decimal) {
        if(decimal == 0){
            return '0';
        }else{
             //create an array in bases 2 not greater than the decimal we are looking for 
        const myArr = [1];
        let inc = 1;
        for (let i = 0; i < decimal; i++){
            if (inc < decimal){
                inc *= 2;
                myArr.push(inc)
            } else if (myArr[myArr.length -1] > decimal){
                    myArr.pop()   
            }
        }
        //reverse array to have the hisges possible number fisrt 
        myArr.reverse();
        //Loop tr the array summing each until we get the result adn assign 1 to a number taken into account to the result 
        let binaryArr = '';
        let counter = 0;
        for (let f = 0; f < myArr.length; f++){
            if (myArr[f] + counter <= decimal ){
                counter += myArr[f]
                binaryArr += '1';
            } else if(myArr[f] + counter > decimal){
                binaryArr += '0';
            }
        }

        return binaryArr
        }

    }
    console.log(binary(12));

}


const sevenboom = [2, 55, 60, 9, 86];

function sevenBoom(arr) {
    let strarr = arr.toString();
    const sevmat = strarr.match(/7/ig);
    if (sevmat == null){
        return 'there is no 7 in the array'
    }
    return 'Boom!'  
}

console.log(sevenBoom(sevenboom));