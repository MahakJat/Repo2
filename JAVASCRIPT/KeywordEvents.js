var h1 = document.querySelector('h1');

document.addEventListener('keydown',function(dets){
   h1.innerHTML = dets.code;
})