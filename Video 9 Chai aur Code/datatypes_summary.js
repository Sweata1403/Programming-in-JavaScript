//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;          //value would be undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)


// const bigNumber = 3456543576654356754n


// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]         //reference type

//objects:

let obj={
    name: "Sweata",
    age : 21, 
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof anotherId);