var number = function(busStops){
  let getOff = 0;
  let getOn = 0;
  for (let i = 0; i < busStops.length; i++) {
    getOn += busStops[i][0];
    getOff += busStops[i][1];
  }
  
  return getOn - getOff;
}



const number = busStops => {
  let getOff = 0;
  let getOn = 0;
  for (let i = 0; i < busStops.length; i++) {
    getOn += busStops[i][0];
    getOff += busStops[i][1];
    }
  return getOn - getOff;
}