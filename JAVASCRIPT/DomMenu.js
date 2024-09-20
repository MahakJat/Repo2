var menuBtn = document.querySelector("#menu");
var menuDiv = document.querySelector("#menuDiv");
let flag = 0;
menuBtn.addEventListener('click',function(){
    if(flag == 0){
          menuDiv.style.left = "50%";
          menuBtn.innerHTML = '<i class="ri-close-line"></i>'
          flag = 1;
    }else{
          menuDiv.style.left = "100%";
          menuBtn.innerHTML = '<i class="ri-menu-3-line"></i>'
          flag = 0;
    }
   
})