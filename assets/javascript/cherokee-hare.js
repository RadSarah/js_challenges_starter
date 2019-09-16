let startingPopulation = 50;
let birthRate = 0.10;
let numberOfWeeks = 6;

let weeklyGain = startingPopulation * birthRate;
console.log(weeklyGain);

let currentPopulation = (weeklyGain * numberOfWeeks) + startingPopulation;
console.log(currentPopulation);



document.write("hello from cherokee-hare.js");