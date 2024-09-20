var card = document.querySelector("#card");
var heart = document.querySelector("#imgDiv h3");

card.addEventListener('dblclick',function(){
    heart.style.transform = 'translate(-50% , -50%) scale(1)';
    

    // this display none property make the heart display none which me if we will again
    //click on the card the heart will not be visible due to display none so we have to 
    //make it's  display block so that we can you this property again
    setTimeout(function(){
         heart.style.display = "none";
    },1200);
    
    setTimeout(function(){
        heart.style.display = "block";
        heart.style.transform = 'translate(-50%,-50%) scale(0)';

    },1500)
})