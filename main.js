const hand = document.querySelector(".hand");

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
