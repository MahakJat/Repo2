var btn = document.querySelector('button');
var h3 = document.querySelector('h3');

btn.addEventListener('click',function(){
    h3.innerHTML = 'waiting..';
    setTimeout(function(){
       h3.innerHTML = 'Friend';
       h3.style.color = 'green';
       btn.innerHTML = 'Remove';
    },5000)
})