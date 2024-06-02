// DATATYPES


// number 1
let challenge = "30 Days Of JavaScript"
// num 2
console.log(challenge)
// num 3
console.log(challenge.length) 
// num4
console.log(challenge.toUpperCase)
// num 5
console.log(challenge.toLowerCase)
// num 6
console.log(challenge.substring(3,6))
//num 7
console.log(challenge.substring(3, 21));
// num 8
console.log(challenge.includes("Script"));
//num 9
console.log(challenge.split(""));
// num 10
let splitArray = challenge.split(" ");
console.log(splitArray);
// num 11
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let companiesArray = companies.split(", ");
console.log(companiesArray);
// num 12
let newChallenge = challenge.replace("JavaScript", "Python");
console.log(newChallenge);
//num 13
console.log(challenge.charAt(15));
// num 14
console.log(challenge.charCodeAt(11))
// num 15
console.log(challenge.indexOf("a"))
// num 16
console.log(challenge.lastIndexOf("a"));
// num 17
let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));
// num 18
console.log(sentence.lastIndexOf("because"));
// num 19
console.log(sentence.search(/because/i));
// num 20
let trimmedChallenge = challenge.trim();
console.log(trimmedChallenge);
// num 21
console.log(challenge.startsWith("30 Days"));
// num 22
console.log(challenge.endsWith("JavaScript"))
//num 23
console.log(challenge.match(/a/g))
// num 24
let str1 = "30 Days of";
let str2 = "JavaScript";
let mergedString = str1.concat(" ", str2);
console.log(mergedString);
//num 25
console.log(challenge.repeat(2));