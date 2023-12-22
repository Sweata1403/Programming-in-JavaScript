// 4 Pillars of DOM
// 1. Selection of an Element --- ✔
// 2. Changing HTML  ✔
// 3. Changing CSS   ✔
// 4. Event Listener ✔

var a= document.querySelector("h1") //for h1 query js has selected to work on
//similarly:
// document.querySelector("#h1") for id 
//document.querySelector(".h1") for class
console.log(a)

var a =document.querySelector("h1")
a.innerHTML="changed"
//or
document.querySelector("h1").innerHTML = "HIIIIIIIii"

var a = document.querySelector("h1")
a.addEventListener("click", function(){
    a.innerHTML="badal gaya hu mein"
    a.style.color="yellow"
    a.style.backgroundColor= "#000"
})
a.style.color="red"

a.style.backgroundColor= "Black"