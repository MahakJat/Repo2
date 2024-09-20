var box = document.querySelector("#box");
var btn = document.querySelector("button");

btn.addEventListener('click',function(){
    var pos1 = Math.floor(Math.random()*80);
    var pos2 = Math.floor(Math.random()*80);
    
    var color1 = Math.floor(Math.random()*225);
    var color2 = Math.floor(Math.random()*225);
    var color3 = Math.floor(Math.random()*225);
    
    var topLeft = Math.floor(Math.random()*50);
    var topRight = Math.floor(Math.random()*50);
    var bottomRight = Math.floor(Math.random()*50);
    var bottomLeft = Math.floor(Math.random()*50);

    var borderRadius =  Math.floor(Math.random()*40);
     
    box.style.position = 'relative';
    var div = document.createElement('div');
    div.style.height = '30px';
    div.style.width = '30px';
    div.style.backgroundColor = 'red';
    div.style.position = 'absolute';
    div.style.top = pos1 + "%";
    div.style.left = pos2 + "%";
    div.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    div.style.borderRadius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;

    box.appendChild(div);
    console.log(pos1);

})