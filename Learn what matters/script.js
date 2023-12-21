//1 word vs keyword ✔

//chacha= word
//for= keyword
//2 var const let ✔
// variables and constants ✔

//3 hoisting: variable banne se pehle hum use krskte hain ✔
//definition: Hoisting is a concept or behavior in JavaScript 
            //where the declaration of a function, variable, or class goes 
            //to the top of the scope they were defined in.
console.log(a)
var a=12
//4. types in js - ✔
// - primitive and reference✔
        //primitives- numbers, strings, null, undefined, boolean
        //reference- (), {}, []
        //aisi koi bhi value jisko copy krne par real copy nhi hota balki us main value ka reference pass hojata hain
        //use hum reference value kehte hain, aur jiska copy krne par real copy hojaye use hum primitive khte hain
        
var a= [1,2,3,4]
var b = a
b.pop()

//14. conditionals✔
// - if else else-if✔

//18 -loops - for while✔
// loop ka matlab repeat
// 0-10

for(var i = 0; i<11; i++){
    console.log(i)
}

var a =12
while(a<20){
    a++;
}

//21 functions✔
// jab aap kuch code likhkr koi kaam de sakte ho
// functions mainly teen kaam k liye hote hain:
//1) jab aapka code aap turant nahi chalana chahte but future me chalana chahte ho
//2) jab aapka code aap reuse krana chahte ho
//3) jab aap apna code chalana chahte ho for different data

function test(){
    console.log("hello world!")
}
test()

//22 - params and arguments✔
function abcd(a){       //parameters
    console.log(a)
}
abcd(12)        //arguments

//arguments:real value jo hum dete hain function chalate waqt
//parameters: variables jinme value store hoti hain arguments wali


//24 arrays: group of values✔
// hum ek variable me ek value store kar pate hain, par jab hume ek se zyada value store krne ho 
// tab fir use hota hain array, matlab ki array aapko freedom deta hain ek se zyada value store karne ki


var a = [12,143]

// - push pop shift unshift splice✔
var arr= [1,2,3,4,,5,6,7]
arr.push(8)
arr.pop()
arr.unshift(0)// array k starting me ek number add krna
arr.shift()
arr.splice(2,2)

//29 objects
//ek se zyada bande ki baat ki toh hua array, ek bande k baare me saari baat ki toh hua object
//object hain ek bande k baare me saari details hold karna, in a key value pair

//1) blank object
var a ={}

//2) filled object
var a ={
    age:24,
    name: "Harsh",
    email: "email@email.com",
    linkedin: "harsh", 
    number: 1234567890
}

a.name="Ratna"
