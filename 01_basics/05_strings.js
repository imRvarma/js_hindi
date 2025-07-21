//Modern String Syntax

const name ="RAHUL"
const name2="kumar"
const repoCount =12
console.log(name+name2+"05");//above wriiting code is not good writting skill in todays world

//Updated
//(By using [backtips] beacuse in this string interpolation is included)

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