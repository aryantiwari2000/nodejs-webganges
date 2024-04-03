// console.log("I am node js");

// const x=12;
// const y=3;

// const res= x*y
// console.log(res)


// const emp{

//     name:"Aryan",

    
// }


//Ananymos function

// const fun= function(){
//     console.log("Hello I am Anonymos function")
// }
// fun();


//Arrow function
// const fun2=(nm)=>{
// console.log(`Hello Mr. ${nm}`);
// }
// fun2("Raj Sing");

//IIFE

// (function(){console.log("I am IIFE Function")})();
// (()=>{console.log("I am IIFE Function")})();


//To export variable to another file

//Method1
const company="Basil Pharma";
module.exports.x=company;

//Method2
module.exports={
    emp:function(){
        console.log("Hello I am Functiom");
    },
    message:"Hello NOdejs"

    
}