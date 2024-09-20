var img = ["../images/buddy.png",
    "../images/minion.png",
    "../images/micky.png",
    "../images/panda.png"
]
var div = document.querySelector('#hy')
var heading = document.querySelectorAll("h1");

heading.forEach(function(elem,index){
    elem.addEventListener('mouseenter',function(){
           elem.style.backgroundColor = 'rgb(24, 78, 108)'
           elem.style.boxShadow = "4px 5px 10px rgb(49, 117, 157)"
        div.innerHTML = "";  // Clear the div before appending new content
        var images = document.createElement('img');
        images.setAttribute('src' , img[index]);
        div.append(images);
    })

    elem.addEventListener('mouseleave',function(){
        elem.style.backgroundColor = 'transparent';
        div.innerHTML = ""; // Clear the div when mouse leaves
    })
})
