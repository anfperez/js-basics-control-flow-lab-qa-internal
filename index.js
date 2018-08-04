// Write your code in this file!
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "this one is on me!";
  }
  else if (distance > 2000) {
  console.log('I will gladly take your thirty bucks.');
  }
  else if (distance > 2500) {
    console.log('No can do.');
  }
}

function ternaryCheckCity(city) {
  if (city === "NYC") {
    console.log("Ok, sounds good.");
  }
  else {
    console.log("No go.");
  }
}

ternaryCheckCity("NYC");