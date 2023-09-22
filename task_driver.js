let hasLicence = true;
let age = 26;
let isDrink = false;

console.log(`Can you drive a car? ${(hasLicence 
    && (age >= 18) 
    && !isDrink) 
    ? "yes" : "no"
}`
);
