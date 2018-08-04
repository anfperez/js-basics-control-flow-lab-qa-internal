// Write your code in this file!
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    console.log("this one is on me!");
  }
  else if (distance > 2000) {
  console.log('I will gladly take your thirty bucks.');
  }
  else if (distance > 2500) {
    console.log('No can do.');
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}
