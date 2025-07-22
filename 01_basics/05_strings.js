//Modern String Syntax

const name ="RAHUL"
const name2="kumar"
const repoCount =12
console.log(name+name2+"05");//above wriiting code is not good writting skill in todays world

//Updated
//(By using  [backtips] beacuse in this string interpolation is included)

console.log(`hello my name is ${name} ${name2}and my repocount is ${repoCount}`);

//new way to declare string

const newName= new String('varmaRahul')
console.log(newName);

console.log(newName[2]);//accesing number position
console.log(newName.__proto__);//to finding prototype [object will come in return{}]
console.log(newName.length);//length=10
console.log(newName.toUpperCase());//VARMARAHUL
console.log(newName.charAt(2));// r 
console.log(newName.indexOf('r'));// 2 [position of index]


//break string in substring(OR slicing)
const newstring =newName.substring(0,4)
console.log(newstring);

//slicing of string(it's important beacuse it can take value in negative also)

const newString2=newName.slice(-9,4)
console.log(newString2);

//kabhi kabhi user string me spaace daal dete hai jo ki jarurat nhihota hai to hum usko [trim/replace]use karke remove karte hai space ko.
//trim ka syntax mdn documentation se pdhee!

//LINK : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const newOne="  Ram  "
console.log(newOne);
console.log(newOne.trim());
console.log(newOne.trimEnd());//similarly trimStart

const url ="https://hitesh.com/hitesh%20chaudhary"

//repalace ka use kaise karte hai aur kab karte hai , jaisa ki humee pata hai kabhi kabhi humee url me hi kuch change karne hote hai to hum[REPLACCE]use krte hai.

const URL = "https://hitesh.com/hitesh%20choudhary"

console.log(URL.replace("%20","_"));//it will replace the given_value to replace_value.

console.log(URL.includes('hitesh'));// it will check 'hitesh' is present or not and return boolean datareturn