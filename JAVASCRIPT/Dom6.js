var btn = document.querySelector("button");
var h2 = document.querySelector("h2");
var body = document.querySelector("body");
var arr = [
    {
        name : 'rcb',
        color:'red',
        bg:'blue'
    },
    {
        name : 'csk',
        color:'yellow',
        bg:'blue'
    },
    {
        name : 'mi',
        color:'blue',
        bg:'gold'
    },{
        name : 'kkr',
        color:'purple',
        bg:'gold'
    }
]
btn.addEventListener('click',function(){
    var index = Math.floor(Math.random()*arr.length);
    h2.innerHTML = arr[index].name;
    h2.style.color = arr[index].bg;
    body.style.backgroundColor = arr[index].color;   
});