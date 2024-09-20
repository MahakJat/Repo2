var btn = document.querySelector('button');
var h1 = document.querySelector('h1');

btn.addEventListener('click',function(){
 
    // h1.innerHTML = "Downloading"; 
    // h1.innerHTML = "Downloaded"; this line will only be shown in browser because the code runs very run after above line the next line will overwrite the first line

    h1.innerHTML = "Downloading....";
    setTimeout(function(){
        h1.innerHTML = "Downloaded";
    },5000);
})