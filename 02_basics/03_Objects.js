//object ko define karne ka 2 tarika hai 1.>literal ,2.>constructor

//singelton

//object literals
//Object.create

const mySym=Symbol("key1")

const Jsuser ={
    name:"Rahul",
    "Full name":"Rahul kumar",
    [mySym]:"mykey1",
    age:18,
    location:"patna",
    email:"rahul@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(Jsuser.email);//yeh sahi trika nhi hai,but humesha esko hi use karna hai baaki jo niche jo sikhe hai[] usko rare case me aur interview question me karna hai.
console.log(Jsuser["email"]);
//console.log(Jsuser.Full name)//chance hi nhi hai ki ess trah define object ko humm dot method se kar paye esliye 17no.line method use krte hai.
console.log(Jsuser["Full name"]);
console.log(Jsuser[mySym]);//yeh shi hai but aise use krna shi nhi rhega.
console.log(typeof Jsuser[mySym]);//yeh print to karega but eska data_type sahi nhi hoga[string]esliye hmm esko aise nhi use krte!, aur ydi symbol ke trah likhna hai t usko square bracket me likhee!tab yeh output me undefined dega jo symbol ka output hota hai.else hmm niche line wala method use krte hai.

console.log(mySym);//output=symbol.
console.log(typeof mySym);

Jsuser.email="rahulvarmakumar@gmail.com"//aise hmm object ka value ko chnage krte hai aur abb hmm email print karnge to abhi jo humne change kiya hai wahaayega output me!
console.log(Jsuser.email);

//hmm value ko locked bhii kr sakte hai [freez]method se.aur uske baad hum koi chnage krenenge to uska koi mtlb nhi rahega.
//Object.freeze(Jsuser);

Jsuser.email="hiteshsir@gmail.com"
console.log(Jsuser.email);//output freez se phle wlaa rhega.

//js me function ko type 1 citizen ke roop me treat kiya jata hai ,means koi discrimination nhi hota same varriable jaise treat kare koi dikkt nhi hoga.

Jsuser.greeting=function(){
    console.log("hello js user");
}
Jsuser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greeting);


console.log(Jsuser.greetingTwo);
console.log(Jsuser.greetingTwo());
