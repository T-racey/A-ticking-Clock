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


const hand = document.querySelector(".hand");
let countDegree= 0;

function setClock() {
 countDegree = countDegree + 6
 hand.style.transform = `rotate(${countDegree}deg)`;
 console.log (countDegree) 

}

setInterval(setClock, 1000);


//hand.style.transform = `rotate(90deg)`; //🔍 HINT: THis is an example of how to rotate the hand!
