
function scuberGreetingForFeet(feet){

  if (feet < 400)
    return 'This one is on me!';
  else if (feet > 2500)
      return 'No can do.';
  else if (feet > 2000)
      return 'I will gladly take your thirty bucks.';
    
} 

function ternaryCheckCity(city){
a = ""
city == 'nyc' ? a =  "Ok, sounds good." : a =  "No go.";
return a
} 
//— Use a ternary operator to return the correct response based on the desired destination of the passenger.
// switchOnCharmFromTip() — Use a switch statement to return a different response based on the generosity of the passenger's tip.