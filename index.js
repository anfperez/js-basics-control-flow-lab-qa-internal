// Write your code in this file!
/*
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    console.log("this one is on me!");
  }
  else if (distance > 2000 && distance < 2500) {
  console.log('I will gladly take your thirty bucks.');
  }
  else if (distance > 2500) {
    console.log('No can do.');
  }
}
*/
function scuberGreetingForFeet (feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (1999 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  case
}
