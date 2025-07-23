//array

//link:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArr=[1,2,3,4,5]
 const myHeroes=["shaktiman","nagraj"]

 const myArr2=new Array(1,2,3,4)
 console.log(myArr[2]);
 console.log(myHeroes[1]);

 //ARRAYs METHODs

 myArr.push(6)//add value
 console.log(myArr)

 myArr.pop()//it is used for removing the last value
 console.log(myArr);

 myArr.unshift(9)
 console.log(myArr);

//kuch questions hume pucchna hai ki wah question jo puchh rahe hai usme hai ya nhi uska answer 

console.log(myArr.includes(9));// in the above real arr 9 is not present so it return false.

console.log(typeof myArr);//object

const newARRAY=myArr.join()
console.log(typeof newARRAY);
console.log(myArr);

//++++++++++ SLICE,SPLICE ++++++++++++

console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2 =myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);

//note:slice aur splice me major difference yah hai ki slice array ko change nhi karta hai aur splice array ko hi change kar deta hai esliye jab hum usko print karte hai to dikhta hai same slice jaisa hi but due to array change.