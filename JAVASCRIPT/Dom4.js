var btn1=document.querySelector("#btn1")
var btn2=document.querySelector("#btn2")
var box=document.querySelector("#box")
var h = document.querySelector("h1");
btn1.addEventListener('click',function(){
    box.style.backgroundColor = "black";
    box.style.borderRadius = "25%"
})
btn2.addEventListener('click',function(){
    box.style.backgroundColor = "yellow";
    box.style.borderRadius = "50%"
})

// box.addEventListener('mouseenter',function(){
//     box.style.backgroundColor = "black";
// })
// btn.addEventListener('dblclick',function(){
//     box.style.backgroundColor = "black";
// })
