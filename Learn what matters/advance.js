//var, let, const
// the difference b/w var let const
// var old js mein tha
// var function scoped hota hai: var apne parent function me kahi bhi use hoskta hain
function abcd(){
    for(var i=1; i<12; i++){
        console.log(i)
    }
    console.log(i)
}

abcd()
// let const new js mein hai
// let braces scoped hota hai

// jitne bhi variables ya data hum baanaate hai unhe
// store kahi to karna padta hai uske liye hota hai heap
// memory

// execution context matlab jab bhi hum function
// chalaayege fnc apna ek khudka ek imaginary container
// bana lega jismein uski teen cheeje hogi :
//  1) variables
//    2) functions inside that parent fnc
//      3) lexical environment of that function

function abcd(){
    var a=12;
    function def(){
        var b=12;
    }
}
abcd();

// execution context is a container where the function's code is
// executed and it's created whenever a function is called, it contains
// 3 things, variables, functions and lexical environment.

// lexical environment hota hai ek chart jisme ye likha hota hai ke
// aapka particular function ki cheejo ko access kar sakta hai and
// kinko nahi, matlab ki it holds it's scope and scope chain

var a=[1,2,3,4,5]
var b=[...a]

b.pop()

// js mein kuchh bhi likho wo mainly do prakaar mein se kisi ek
// prakaar ko belong karti hai
// falsy values ye hai = 0 false undefined null NaN document.all
// truthy values

if(7){
    console. log ("hey");
}
else{
    console.log ("hello");
}


// foreach loop srf array pe chalta hai matlab ki jab bhi tumhaare
// paas ek array ho, tab use mein kaun aata hai foreach loop

var a =[1,2,3,4,5,5,6,7,7,34,54,64];
a.forEach(function(val){
    console.log(val+2);

})
// foeach kabhi bhi by default aapke array mein change nahi karta wo
// aapko changes krke deta hai array ki temporary copy par jiske wajah
// se array humesha same rehta hai

//objects par loop krne k liye hota hain forin loop

var obj={
    name: "Sweata",
    age: 21,
    city: "Kolkata"
}

for(var key in obj){
    comsole.log(key);
}
for(var key in obj){
    comsole.log(obj[key]);
}
for(var key in obj){
    comsole.log(key, obj[key]);
}


var a = 12;
do{
    console. log("hey");
    a++;
}
while (a < 15){

}

// callback fncs
// / jab bhi koi aisa code jo baad me chalta hai aap likhoge, kyuki wo
// code baad mein chalta hai js ko ye pata nahi hota ke wo complete hua
// ya nahi, aise code ke completion par js ko btaya jaata hai ke wo
// complete hogya aur aap use chala sakte ho, ye bataane ka kaam
// callback ka hai

setTimeout (function (){
    console. log("2 second baad chala");
}, 2000) ;
// aisa code jo baad me chalta hai use hum ek function dedete hai ke
// bhaiya jab complete hojaana to ye function chala dena, aur wo
// function jo hum dete hai wo ek normal fnc hi hota hai aur use kahte
// hai callback fnc
// first class fncs
// js mein ek concept hai jiska matlab hota hai ki aap fnc ko use
// kar sakte ho as a value
function abcd (a){
    a ( ) ;
}

abcd (function() {console. log ("hey");})

var a = {
    name: "harsh",
    age: 24
}
delete a.age;
