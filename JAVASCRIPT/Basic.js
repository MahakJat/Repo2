// /////////////////////////////////////////var constant let/////////////////////////////
// var x = 10;
// const y = 80;
// x = 15; 
// //y = 20; //TypeError: Assignment to constant variable. 
// //this will give error because constant cannot be changed

// //in const value cannot be reassigned whereas in var value can be reassigned

// ///////////////////////////////////////let and var//////////////////////////////////

// console.log(b); // Hoisted to the top of its scope, but initialized as undefined. 
// //this line will not give error because the var variable are hoisted at top and initized by undefined

// console.log(a);  //ReferenceError: a is not defined   Hoisted, but not initialized. Accessing it before declaration results in a ReferenceError.
// {
//   let a = 20;
//   var b = 30;
//   var b = 50;
// //   let a = 50; error because let variable cannot be redeclared in the same scope where as var variable can be redeclared in the same scope
// }
// console.log(a); //error will come that  a is not defined because let variable are braces{} scoped
// console.log(b); //var varibles are function scoped


// ///////////////////////////////////////////hoisting///////////////////////////////
// //variables and functions are hoisted which means there declaration is moved to top of the code

// var w = 12; 
// //this line will be converted to 
// // var w ; and this declaration will moved to the top that is why if we try to access the w before making it the we are able to access it but the value is undefined
// // w = 12;

//## let is braces scoped and var is function scoped 
function abcd(){
    for(var i = 0 ; i < 10 ; i++){
        console.log(i);
    }
    console.log(i); //here i value will be printed there will be not error because we can access the var anywhere in its parenet function
}
function abc(){
    for(let i = 0 ; i < 10 ; i++){
        console.log(i);
    }
   // console.log(i); // this will give error because the let is braces scoped and will can access let outside the given for loop
}
abc()
abcd()

//var addes itself to the window object
// let and const doesn't add itself to the window object (const and let shares same property)
var a = 20 ; // this will be added to the window you can check it in window
let p = 45; //this is not added in the window

//adding variable to the window is not good because it exposes your data
// //////////////////////////////////types in js//////////////////////////////////
// //primitive and reference

// // primitives - number string undefinded null boolean NaN
// // reference -[] {} ()

// //aisi koi bhi value jisko copy karne pe real copy nhi hoti , balki ussme value ka reference pass hota hai
// //usse hum reference value kahte hai , aur jiska copy karne par real value copy ho jaaye
// // woh value primitive hoti hai

// /////////////////////////////////////conditionals////////////////////////////////////
// //if else else-if ternary and switch 
// // essa hua toh kya vesa hua toh kya



//////////////////////truthy and falsy////////////////////////////////////




// ////////////////////////////for and while/////////////////////////////////

// // loops means repetition
// // 1 1 1 1 1 1 1 1 1 1 - repetition of number and print
// // 1 2 3 4 5 6 7 8 9 - repetition of print
// //same as java


// //////////////////////////////////functions////////////////////////////////
// //use of function 
// //1) Use don't want to run  your code right now but in future
// //2)When you want to reuse your code
// //3)When you want to run your code everytime with different values

// //arguments are real values which we pass when calling a function
// //parameter are the container that receives or stores the values passed in function i.e arguments



///////////////////////////////////Arrays////////////////////////////////////////
//push pop shift unshift splice
var arr = [1,2,3,4,5,6,7]
console.log(arr.pop())
arr.push(8);
console.log(arr);
arr.shift(); //left shift the value by one removes the first value
console.log(arr);
arr.unshift(10); //right shifts the values of array by one and add the value to front
console.log(arr);

arr.splice(2,3) ; //input the index from where you to remove and how many values from that index 
//from index 2 remove 3 elements


/////////////////////////////objects////////////////////////////////////////////////
//details of a particular thing ,person etc
//object is key value pair in JavaScript
var obj = {}; //black object

var obj1 = {
     name: "Mahak Jat", //name is a property
     age:23, //age is a property
     email:"mahak@gmail.com",

     //a property whose value is a function is known as methods in js
     moreDetails : function(){
        console.log("Hello EveryOne");
     }
}
console.log(obj1.name);
console.log(obj1.moreDetails()); //"Hello EveryOne" will be printed and also 
                                 // undefined because function is not returning anything
//updation of property of object

obj1.age = 20;
console.log(obj1.age);


//browser mainly gives three thing called - browser  context api 
//it contents
// 1 - window 
 //2 - heap  // storage
 //3 -stack // tell which line will run when


 //execution context and lexical environment

//   to copy the one array to another can be done by SPREAD OPERATOR (...)

var arr = [1,2,3,4,5,6];
var brr = [...arr];
arr.pop();
console.log(arr);
console.log(brr);

var obj = {
    name : "Mahak Jat"
}
var copyObj = {...obj};
console.log(copyObj);

///switch same as conventional(old one break wala) switch of java

//foreach forin  do-while(do - while same as java)

//for each works only on array
arr.forEach(function(variable){
    console.log(variable);
})

//objects pe loop karne ke liye use hota hai forin

var obj2 = {
    name : "Mahak Jat",
    age : 20,
    gender : "Female"
}

for(var key in obj2){
    console.log(key); 
}
//to access the values of the object
for(var key in obj2){
    console.log(key,obj2[key]);
}

//call back functions


//synchronous code means code will run line by line --inorder dependent
//asynchronous means  independent may not be line by line