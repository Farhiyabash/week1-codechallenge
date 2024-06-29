// use prompt to request the user for input
// if speed is < than 70 write ok
// if above speed limit (70) , demerit=1 for every 5km
// if points > 12 display license suspended


// the function calculates the speed limit 
function SpeedCalculator(){
    // request driver for their speed
    let speed = prompt("insert car speed");
  
    // initialize the speed limit to 70
    let speedlimit= 70;
  
    // check if speed is < speed limit 
    if(speed < speedlimit){
      alert("ok");
    } else if(speed > speedlimit){
      // calculate the overspeeding 
      let overspeeding = speed - speedlimit;
  
      // calculate demerits
      let demerits = overspeeding / 5 ;
      alert(demerits);
  
      // if the demerits > 12 , display license suspended  
      if( demerits > 12 ){
        alert("license suspended");
      }
    }
  }
  SpeedCalculator();