var btn = document.querySelector("button");
var img = document.querySelector("img");

btn.addEventListener('click' ,function(){
    var mar1 = Math.floor(Math.random()*25);
    var mar2 = Math.floor(Math.random()*85);
    img.style.marginTop = mar1+"%";
    img.style.marginLeft = mar2+"%"; 
    var fliter1 = Math.floor(Math.random()*100);
    var fliter2 = Math.floor(Math.random()*10);
    var fliter3 = Math.floor(Math.random()*10);
    img.style.filter = `grayscale(${fliter1})`
    img.style.filter = `contrast(${fliter2})`
    img.style.filter = `saturate(${fliter3})`

})