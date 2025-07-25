//const tinderUser = new Object()  //singelton object method 
const tinderUser = {}  //non-singelton object.

tinderUser.id ="123abc"
tinderUser.name ="raghav"
tinderUser.isLoggedIn =false
//console.log(tinderUser);  // ab  hmm agr print krenge to abhi jo value humne diya oo sab print hokr aayega tinderUser ke under me.


//object under object
const regularUser ={
    email:"sum@gmail.com",
    fullname:{
        userFullName:{
            firstName:"Rahul",
            lastName:"Varma",
        }
    }
}
console.log(regularUser);
console.log(regularUser.fullname);//agr hum regular user me dot lagyaenge t sabka alg alg access karne ko pta chal jayega ki kaise aatta hai.

//console.log(regularUser.fullname.userFullName.firstName);


//merge of object like array combination.
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}
//console.log(obj3);//yeh print to hoga but object ke under object print hoga jo ki ek acccha trika nhi hai.so,

const obj4=Object.assign({},obj1,obj2)
console.log(obj4);

const obj3 ={...obj1,...obj2}
console.log(obj3);
// READ DOCUMENTATION OF OBJECT ASSIGN



//agr data_base se value aayega to aise aayega 
const users=[
    {
      id:"1",
      email:"ram@gmail.com"  
    },
    {
    id:"1",
      email:"ram@gmail.com"  
    },
    {
        id:"1",
      email:"ram@gmail.com"  
    },
]
users[0].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));//output=arrays , which is very important for projcts.

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//to kyii baar properties ko use krne se phle hmm phle check kr lenge ki wah avilabe hai ki nhi uske baad use karenge to sahi rahega!