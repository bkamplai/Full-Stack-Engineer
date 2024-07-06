let raceNumber = Math.floor(Math.random() * 1000);
let isEarly = false;
let runnerAge = 18;

if (isEarly && runnerAge > 18) {
    raceNumber += 1000;
}

if (isEarly && runnerAge > 18) {
    console.log(`You race at 9:30 am. Your race number is ${raceNumber}.`);
} else if (!isEarly && runnerAge > 18) {
    console.log(`You race at 11:00 am. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
    console.log(`You race at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
    console.log('Please see the registration desk.');
}