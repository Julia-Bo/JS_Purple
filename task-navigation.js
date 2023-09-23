let positionLat = 101;
let positionLong = 71;
let addressLat = 9;
let addressLong = 6;

let Long = positionLong - addressLong;
let Lat = positionLat - addressLat;

let res = Math.sqrt(Long ** 2 + Lat ** 2);

let distance = Math.round(res);

console.log(`Your distance = ${distance} km`);

