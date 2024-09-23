// const myText= document.getElementById("myText");
// const mySubmit= document.getElementById("mySubmit");
// const resultElement= document.getElementById("resultElement");
// let age;

// mySubmit.onclick=function(){

//     age = myText.value

//     age= Number(age);
//     if(age >=100){
        
//         resultElement.textContent=`You are too OLD for this Site.`;
//     }
    
//     else if(age>= 18){
//          resultElement.textContent=`You are OLD enough for the site`;
//     }
    
//     else if(age== 0){
//         resultElement.textContent=`Age Cant be Zero`;
//     }
    
//     else{
//         resultElement.textContent=`You must be 18 for this site.`;
// }


// }

//Checked Property in JavaScript



// const myCheckBox= document.getElementById("myCheckBox");
// const visabtn= document.getElementById("visabtn");
// const masterCardBtn= document.getElementById("masterCardBtn");
// const payPalBtn= document.getElementById("payPalBtn");
// const mySubmit= document.getElementById("mySubmit");
// const subResult= document.getElementById("subResult");
// const paymentResult= document.getElementById("paymentResult");


// mySubmit.onclick = function(){

//     if(myCheckBox.checked){
//         subResult.textContent=`You have Subcribed.`
//     }
//     else(
//         subResult.textContent=`You aren't Subcribed.`
//     )

//     if(visabtn.checked){
//         paymentResult.textContent=`You are paying through VISA.`
//     }

//     else if(masterCardBtn.checked){
//         paymentResult.textContent=`You are paying through Master Card.`
//     }

//     else if(payPalBtn.checked){
//         paymentResult.textContent=`You are paying through PayPal.`
//     }

//     else{
//          paymentResult.textContent=`Choose a Payment Method.`
//     }
// }


//Swtich Cases

let day ="Pizza";

// switch(day){
//     case 1:
//         console.log(`Today is Monday`);
//         break;
        
//     default:
//         console.log(`${day} is not a day`)
// }

// let testScore= 65;
// let Grade;

// switch(true){
//     case testScore>= 90:
//         Grade="A";
//         break;

//     case testScore>= 80:
//         Grade="B";
//             break;

//     case testScore>= 70:
//         Grade="C";
//                 break;
//     default:
//         Grade="You are fail";
//         break;

// }

// console.log(Grade);

// let fullName= "Faraz Nawaz";

// let firstName = fullName.slice(0,5);
// let lastName = fullName.slice(6,11);

// console.log(firstName);
// console.log(lastName);

//Number Guessing Game

// const minNum = 1;
// const maxNum= 100;

// const answer= Math.floor(Math.random() * (maxNum - minNum +1))+ minNum;


// let attempts = 0;
// let guess;
// let running = true;

// while(running){

//     guess =window.prompt(`Guess a Number between ${minNum} and ${maxNum}`);
//     guess = Number(guess);
    
//     if(isNaN(guess)){
//         window.alert(`Please Enter a Valid Number.`);
//     }
//     else if(guess < minNum || guess> maxNum  ){
//         window.alert(`Please Enter a Valid Number between ${minNum} - ${maxNum}.`);
//     }

//     else{
//         attempts++;
//         if(guess < answer){
//             window.alert("Too Low Try Again");
//         }
//         else if(guess>answer){
//             window.alert("Too High Try Again");
//         }
//         else{
//             window.alert(`Correct ! The Answer was ${answer} , it took ${attempts} for result.`);
//             running = false;
//         }
//     }
    
// }
//----------------------- Number Guessing Game-----------------
// const minNum = 1;
// const maxNum = 100;

// const answer= Math.floor(Math.random()* (maxNum - minNum +1))+ minNum;

// console.log (answer);

// let guess;
// let attempts= 0;
// let running= true;

// while(running){

//     guess = window.prompt(`Guess a Number between ${minNum} and ${maxNum}.`);
//     guess = Number(guess);
//     if(isNaN(guess)){
//         window.alert("This is not a Valid Number");
//     }
//     else if (guess < minNum || guess > maxNum){
//         window.alert(`Please Enter Number Between ${minNum} and ${maxNum}.`);
//     }
//     else{

//         attempts++;
//         if(guess< answer){
//             window.alert("Your Guess is Too Low");
//         }
//         else if ( guess> answer){
//             window.alert("Your Guess is too High");

//         }
//         else{
//             window.alert(`Congratulations, You got the Right Answer ${answer} in ${attempts} Attemps`);
//             running= false;
//         }
        
//     }

    
// }

// function happyBirthDay(username , age){
//     console.log("Happy Birthday To YOu");
//     console.log("Happy Birthday To YOu");
//     console.log(`Happy Birthday Dear ${username}`);
//     console.log(`You are ${age} old now.`)
// }

// happyBirthDay("Tahira", 21);

//  function add(x,y){
//     let result =x+y;
//     return result;
//  }

//  let result = add(143, 143);
// //  result= Number(result);
//  console.log(typeof result, result);

//Variable Scope in JavaScript

// function function1 (){
//     let x= 14;
//     console.log(x);
// }

// function function2 (){
//     let x= 25;
//     console.log(x);
// }

// function1();
// function2();

//temprature Conversion Program

const textBox= document.getElementById("texBox");
const toFahrenheit= document.getElementById("toFahrenheit");
const toCelsius= document.getElementById("toCelsius");
const result= document.getElementById("result");

let temp;


function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9/5 +32;
        result.textContent= temp.toFixed(1) + "°F";
    }

    else if(toCelsius.checked){

        temp = Number(textBox.value);
        temp = (temp-32) * 5/9;
        result.textContent= temp.toFixed(1) + "°C";
    }

    else{
        result.textContent= "Select a Unit";
    }
    
}