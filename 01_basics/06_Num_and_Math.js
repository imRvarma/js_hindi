//+++++++++++++++++++++++++ NUMBER ++++++++++++++++++++

const score=400
console.log(score);
const balance=new Number(100)
console.log(balance);

//kuchh number ko define karne ka trika aur uske related jo baat hai usko discus yaha hum karenge
console.log(score.toExponential());
console.log(score.toFixed());
console.log(score.toLocaleString());
console.log(score.toPrecision());
console.log(score.valueOf());
console.log(score.toString().length);
console.log(score.toFixed(2));//value yaha fixed ho jayega decimal ke baad ka 2 point ko add ho jayega

//precision ko check karne ka trika kaise check karenge aur kaise fixed karenge ex:value=23.342
const value=23.342
console.log(value.toPrecision(3));//output=23.3,if precision value is 2 it will return in output=23 ,and if decimal will be grater than 6> then it will return 24 ex:value2=23.78
const value2=23.78
console.log(value2.toPrecision(2)); //yaha 2nd position par value ko precise kiya jayega 

const hundreds=1000000
console.log(hundreds.toLocaleString());//it will return in US value 1,000,000
console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++++++++ MATH ++++++++++++++++++++++++

//inspect me math ko print krke dekhebge ki kyaa_kyaa value aa raha hai.
console.log(Math.abs(-4));//output:4 it is absolute value,But dont think if i will take -4 then it will become 4!
console.log(Math.round(2.3));//output=2,if value is 2.6 then output is 3.
console.log(Math.ceil(2.1));//output is 3
console.log(Math.floor(2.9));//output is 2

//to find min_value and max_value in the array we use[min]and[max]
console.log(Math.min(2,4,6,8,9,1));//output:1
console.log(Math.max(12,8,3,2,7,0));//output:12

//++++++++++ random_math +++++++++++

console.log(Math.random());//it will always give return in 0-1.
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);