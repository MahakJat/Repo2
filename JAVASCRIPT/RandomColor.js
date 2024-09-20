var btn = document.querySelector("button");
var box = document.querySelector("#box");
var h = document.querySelector("h1");
btn.addEventListener('click',function(){
       var color1 = Math.floor(Math.random() * 255);
       var color2 = Math.floor(Math.random() * 255);
       var color3 = Math.floor(Math.random() * 255);
       box.style.backgroundColor = `rgb(${color1},${color2},${color3})`

})
