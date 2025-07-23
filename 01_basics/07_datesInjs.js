// //Dates

// const myDate=new Date()
// console.log(myDate);
// //this all metod given below is used for the finding exact date bcz above method will not provide exact dateform.
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// //interview question ki date kyaa hota hai to usko pata karte hai!
// console.log(typeof (myDate));
// //to find the created date it is important so use below rule or syntax to find the exact written date.
// let myCreateddate=new Date(2023,2,2)
// console.log(myCreateddate);//this is not provide usefull date ,in it confusion will arise that what is the date in output so use the above provided method to find the exact date.
// console.log(myCreateddate.toDateString());//time u can also inclue time is under_bracket. ex:(2023,0,24,5,13,12).

// //hum exact formate bhi pass kar sakte hai date ka 
// let myNewCreatedDate=new Date("2025-07-22")
// console.log(myNewCreatedDate.toDateString());

// //+++++++++++ timeStamp +++++++++++
// let myTimeStamp=Date.now()
// console.log(myTimeStamp);//output in milisecond
// console.log(myNewCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));//for converting date milisecond to second aur kayi baar date decimal se pahle zero me ho jata hai to usko convert karne ke liye hmm floor value lete hai.

//       //date exact pata karne ke liye 
let newDate2=new Date()
// console.log(newDate2);
// console.log(newDate2.getDate());
// console.log(newDate2.getDay());
// console.log(newDate2.getMinutes());

console.log(newDate2.toLocaleString('dafault',{
weekday:"long",  
}))