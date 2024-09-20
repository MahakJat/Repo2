var btn = document.querySelector('button');
var growth = document.querySelector('.growth');
var h1 = document.querySelector('h1');
num = 0;
btn.addEventListener('click',function(){
    btn.innerHTML = "Downloading.."; 
    var int = setInterval(function(){
      num+=1;
      h1.innerHTML = num + "%";
      growth.style.width = num + "%";
    },100);

    setTimeout(function(){
       clearInterval(int);
       btn.innerHTML = "Downloaded";
       btn.style.backgroundColor = ` rgb(51, 135, 93)`
    },10000)
})