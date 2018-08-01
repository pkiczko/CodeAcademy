let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 18;
if (runnerAge > 18 && registeredEarly === true) {
  raceNumber+=1000;
}
if (runnerAge > 18 && registeredEarly === true) {
  console.log(`You will start the race at 9:30 am! Your number is ${raceNumber}.`);
}
else if (runnerAge > 18 && registeredEarly !== true) {
  console.log(`You will start the race at 11:00 am! Your number is ${raceNumber}.`);
}
else if (runnerAge < 18) {console.log(`Youths will start the race at 12:30 am! Your number is ${raceNumber}.`)}
else {console.log(`Participant is asked to see the registration desk!`)};
