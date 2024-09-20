/* setTimeOut makes the code asynchrous */

// console.log("heelllo 1");
// setTimeout(function(){
//  console.log("hello everyone");
// },1000); /* time in miliseconds */


// SET INTERVAL --  to stop the interval we use function clear interval
var h1 = document.querySelector('h1');
var num = 0
var interval = setInterval(function(){
   h1.innerHTML = num;
   num += 1;
},50);

setTimeout(function(){
    clearInterval(interval); 
},5050); //after 4000 sec the setTime out will run which have function clear interval which will clear the interval