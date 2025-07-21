// // primitive dataTypes

// //7 types: string,number,boolean,null,undefined,symbol,bigInt

//      //Symbol

// let id=symbol('123')
// let anotherId=symbol('123');//every symbol takes different value not same value so it is importance of the symbol

// console.log(id==anotherId); 

//          //BigInt

// const bigNumber=213425n
// console.log(bigNumber);

// //non premitive or reference dataTypes

// //3 types:arrays , objects,functions

// const heros = ["shaktiman","nagaraj","doga"]//array

// let myObj={
//     name:"Rahul",
//     age :22,
// }//objeect

// const myFunction=function(){
//     console.log("hello world");
// }//function

//read documentation for inter view

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures

//++++++++++++++++

//Stack(primitive), Heap(non premitive)

let myyotubename = "rahulkumardotcom"

let AnotherName = myyotubename

console.log(AnotherName);


let userOne ={
    email:"rahul@gmail.com",
    upi:"upirahul@ybl"
}

let userTwo =userOne
userTwo.email="happyrahul@gmail.com"

console.log(userOne);
console.log(userTwo);