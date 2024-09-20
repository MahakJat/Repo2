var btn = document.querySelector("button");
var bulb = document.querySelector("#bulb");
var flag = 0;
btn.addEventListener("click",function(){
    if(flag === 0){
        bulb.style.backgroundColor = "yellow";
        btn.textContent = "ON";
        flag = 1;
    }else{
        bulb.style.backgroundColor = "transparent";
        btn.textContent = "OFF";
        flag = 0;
    }
})