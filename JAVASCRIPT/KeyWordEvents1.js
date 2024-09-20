var img = document.querySelector("img");

var leftRight = 0;
var topBottom = 0;
document.addEventListener('keydown',function(dets){
     if(dets.code === 'ArrowRight' && leftRight < 70){
        leftRight++;
        img.style.left = leftRight + "%";
     }else if(dets.code === 'ArrowLeft'  && leftRight > 0){
        leftRight--;
        img.style.left = leftRight + "%"    
     }else if(dets.code === 'ArrowUp' && topBottom > 0){
         topBottom--;
         img.style.top = topBottom + "%"    
     }else if(dets.code === 'ArrowDown' && topBottom < 50){
        topBottom++;
        img.style.top = topBottom + "%"    
     }
})