const marvel_Heroes=["thor","ironman","spiderman"]
const dc_Heroes =["superman","flash","batman"]
//marvel_Heroes.push(dc_Heroes);
//console.log(marvel_Heroes);
//console.log(marvel_Heroes[3]);
//console.log(marvel_Heroes[3][2]);

//const allHeroes=marvel_Heroes.concat(dc_Heroes)
//console.log(allHeroes);

//important method to add all array[spread(...)],in the spread operator we can add multiple 2 or more than 2 array but in concat we can add 2 array only.

const all_my_heroes=[...marvel_Heroes,...dc_Heroes]
console.log(all_my_heroes);

//use of[flat],yeh sabko ek array me change kar deta hai.

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));//yaha hum question pucch rahe hai ki hitesh ek array hai ya nhi to output me aata hai nhi(false).but humee usko array me convert karna hai uske liye hum kyaa krenge ki[from]use karenge.
console.log(Array.from("hitesh"));//output is array.
console.log(Array.from({name:"rahul"}))//interesting //it may be ask in interview ki key se jab hum element lete hai usko kaise karte hai aur jab key se element lete hai to wah directly change nhi kar deta hai ye ek output me empty bhi det hai[].

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));