document.querySelector("h1").textContent += " world"; // += will add = will replace
document.querySelector("h2").style.color = "red";
document.querySelector("h3").innerHTML = "<i>word</i>";
document.querySelector("h4");
let sel = document.querySelector("select");
console.log(sel);

document.querySelector("select").innerHTML += "<option>Sabki pasand nirma</option>"

let heading5 = document.querySelector("h5");
console.log(heading5);

document.querySelector("h1").textContent = "huihui";
document.querySelector("h3").style.color = "yellow";

document.querySelector("h4").style.color += "Jat";
document.querySelector("ol").innerHTML += "<li>black berry</li>" 


// selection
// document.querySelector();//we can select anything why this selector this is universal
// document.getElementById();// # is not written here because it selects only id
// document.getElementsByClassName();// . is not written here because it selects only class arrays is show
// document.getElementsByTagName();

let abc = document.getElementById("abc");
let def = document.getElementsByClassName("def"); //gives array like structure because there may be many element can have same class
let efg = document.getElementsByTagName("h1");

let h6  = document.querySelector("h6");
h6.innerHTML = '<div class = "bg-red-500">hey</div>'//this is tailwindcode


//attributes
let img = document.querySelector("img");
img.setAttribute("src","https://images.unsplash.com/photo-1606554544721-783a3be6e6bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");