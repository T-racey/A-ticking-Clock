// define function , 
  // function name : setClock DONE
  // move hand by 6 degrees every 1 second (1000ms)
// then call the function DONE
 //use call back to run function every 1000ms Done
  // using setInterval
//stop the clock at 360 degrees 
// attach console.log to check progress 
// determine what object we are working with : document.querySelector(".hand")
// determine what property we are changing : transform

<<<<<<< HEAD
hand.style.transform = `rotate(90deg)`; //🔍 HINT: THis is an example of how to rotate the hand!

// Get the elements for the clock hands
//const hourHand = document.querySelector(".hour-hand");
//const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".hand");

function setTime() {
  // Get the current time
  const now = new Date();

  // Calculate the degree of rotation for each hand based on the current time
  const secondsDegrees = (now.getSeconds() / 60) * 360 + 90;
  const minutesDegrees = (now.getMinutes() / 60) * 360 + (now.getSeconds() / 60) * 6 + 90;
  const hoursDegrees = (now.getHours() / 12) * 360 + (now.getMinutes() / 60) * 30 + 90;

  // Apply the rotation to each hand
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  //minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  ho//urHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Call the setTime function every second to update the clock hands
setInterval(setTime, 1000);
=======



const hand = document.querySelector(".hand");
let countDegree= 0;

function setClock() {
 countDegree = countDegree + 6
 hand.style.transform = `rotate(${countDegree}deg)`;
 console.log (countDegree) 

}

setInterval(setClock, 1000);


//hand.style.transform = `rotate(90deg)`; //🔍 HINT: THis is an example of how to rotate the hand!
>>>>>>> f2c82defb7642680fd25caa4dcc85275e3bd3b07
