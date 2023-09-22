let positionLat = 101;
let positionLong = 71;
let addressLat = 9;
let addressLong = 6;

let distance = (((positionLong - addressLong) ** 2) + 
    ((positionLat - addressLat) ** 2)) ** (1/2);

console.log(distance);

