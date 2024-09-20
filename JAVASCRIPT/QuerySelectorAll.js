var heading = document.querySelectorAll("h1");
// console.log(heading); // node list will be printed and nodeList is 99% similar to array

// console.log(heading[0]); //first heading will be selected and so on
// console.log(heading[1]);
// console.log(heading[2]);
// console.log(heading[3]);

// heading[0].innerHTML = "Changed";

// heading.forEach(function(){
//     console.log("hello");
// })


// arr = [10,20,30,40];

// arr.forEach(function(elem){
//     console.log(elem)
// })

var img = ["../images/buddy.png",
    "../images/minion.png",
    "../images/micky.png",
    "../images/panda.png"
]
var div = document.querySelector('#hy')


heading.forEach(function(elem){
    // console.log(elem)
    elem.addEventListener("mouseenter",function(){
        elem.style.backgroundColor = "red";
        div.innerHTML = elem.textContent;
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
    })
})