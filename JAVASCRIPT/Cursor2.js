var body = document.querySelector("body");
var cursor = document.querySelector("#cursor");
var h1 = document.querySelector("h1");

body.addEventListener('mousemove',function(dets){
        cursor.style.left = dets.x + "px";
        cursor.style.top = dets.y + "px";
        console.log(dets.x);
})

h1.addEventListener('mouseenter',function(){
    cursor.style.scale = 2
})

h1.addEventListener('mouseleave',function(){
    cursor.style.scale = 1
})

// when the cursor will be on the h1 then the scale of the cursor
//  will increase and our pointer that cursor will come between the h1 and pointer
//   which will make the cursor chitter because the pointer will be on the cursor
//    not h1 so mouse leave event will be perfomed and cursor
//  will be small then again the pointer will be on h1 so this will make cursor
//   smaller greater and smaller again and again  so to avoid it give h1 position relative 