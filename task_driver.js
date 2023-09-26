let hasLicence = true;
let age = 26;
let isDrink = false;

console.log(`${(hasLicence 
    && (age >= 18) 
    && !isDrink) 
    ? "The driver can go" : "The driver can't go"
}`
);
