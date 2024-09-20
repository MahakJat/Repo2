var btn = document.querySelector('button');
var box = document.querySelector('#box');

var arr = [
    '../images/minion.png',
    '../images/minion2.png',
    '../images/minion3.png',
    '../images/minion4.png',
    '../images/minion5.png'
]
btn.addEventListener('click' , function(){
     var x = Math.floor(Math.random()*80);
     var y = Math.floor(Math.random()*70);
     var rotate = Math.floor(Math.random()*360);
     var s = Math.random() * 2 + 0.3;
     var index = Math.floor(Math.random()* arr.length);
     var img = document.createElement('img');
     img.setAttribute('src',arr[index]);
     img.style.left = x + "%"
     img.style.top = y + "%"
     img.style.scale = s;
     img.style.rotate = rotate + "deg"
     box.appendChild(img);  
})