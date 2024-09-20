var forward = document.querySelector("#forward");
var backward = document.querySelector("#backward");
var img = document.querySelector("img");
var move = 0;
forward.addEventListener('click',function(){
    move += 10;
    img.style.left = move +"%";
    if(move >= 80) move = 0;
})
backward.addEventListener('click',function(){
    move -= 10;
    img.style.left = move +"%";
    if(move < 20) move = 0;
})