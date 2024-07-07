function getSleepHours(day) {
    switch (day.toLowerCase()) {
        case "sunday":
            return Math.floor(Math.random() * 10);
            break;
        case "monday":
            return Math.floor(Math.random() * 10);
            break;
        case "tuesday":
            return Math.floor(Math.random() * 10);
            break;
        case "wednesday":
            return Math.floor(Math.random() * 10);
            break;
        case "thursday":
            return Math.floor(Math.random() * 10);
            break;
        case "friday":
            return Math.floor(Math.random() * 10);
            break;
        case "saturday":
            return Math.floor(Math.random() * 10);
            break;
        default:
            console.log("Please enter a valid day of the week.");
            break;
    }
}

function getActualSleepHours() {
    return (
        getSleepHours("sunday") +
        getSleepHours("monday") +
        getSleepHours("tuesday") +
        getSleepHours("wednesday") +
        getSleepHours("thursday") +
        getSleepHours("friday") +
        getSleepHours("saturday")
    );
}

function getIdealSleepHours(idealHours = 8) {
    return idealHours * 7;
}

function calculateSleepDept() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got more sleep than needed!');
        console.log(`You slept a total of ${actualSleepHours} hour(s).`);
        console.log(`You slept ${actualSleepHours - idealSleepHours} hour(s) more than needed.`);
    } else {
        console.log('You should get some rest.');
        console.log(`You slept a total of ${actualSleepHours} hour(s).`);
        console.log(`You slept ${idealSleepHours - actualSleepHours} hour(s) less than needed.`);
    }
}

calculateSleepDept();