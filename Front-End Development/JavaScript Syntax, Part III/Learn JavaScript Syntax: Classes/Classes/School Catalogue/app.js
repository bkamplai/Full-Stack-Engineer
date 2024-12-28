class School {
    constructor(name, level, numberOfStudents, averageTestScores, schoolOverview) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
        this._averageTestScores = averageTestScores;
        this._schoolOverview = schoolOverview;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    get averageTestScores() {
        return this._averageTestScores;
    }

    get schoolOverview() {
        return this._schoolOverview;
    }

    set numberOfStudents(num) {
        if (typeof num === 'number') {
            this._numberOfStudents = num
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }

    set averageTestScores(newAverageTestScores) {
        if (typeof newAverageTestScores === 'number') {
            this._averageTestScores = newAverageTestScores;
        } else {
            console.log('Invalid input: averageTestScores must be set to a Number.');
        }
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }

    static pickSubstituteTeacher(substituteTeacher) {
        let randNum = Math.floor(Math.random() * substituteTeacher.length);
        return substituteTeacher[randNum];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy, averageTestScores, schoolOverview) {
        super(name, 'primary', numberOfStudents, averageTestScores, schoolOverview);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams, averageTestScores, schoolOverview) {
        super(name, 'high', numberOfStudents, averageTestScores, schoolOverview);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        console.log(this._sportsTeams.join(', '));
        return this._sportsTeams;
    }
}

class MiddleSchool extends School {
    constructor(name, numberOfStudents, averageTestScores, schoolOverview) {
        super(name, 'middle', numberOfStudents, averageTestScores, schoolOverview);
    }
}

class SchoolCatalog {
    constructor() {
        this._primarySchools = [];
        this._middleSchools = [];
        this._highSchools = [];
    }

    addSchool(school) {
        if (school instanceof PrimarySchool) {
            this._primarySchools.push(school);
        } else if (school instanceof MiddleSchool) {
            this._middleSchools.push(school);
        } else if (school instanceof HighSchool) {
            this._highSchools.push(school);
        } else {
            console.log('Invalid school type.');
        }
    }

    get primarySchools() {
        return this._primarySchools;
    }

    get middleSchools() {
        return this._middleSchools;
    }

    get highSchools() {
        return this._highSchools;
    }
}

const schoolCatalog = new SchoolCatalog();

const lorrainHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorrainHansbury.quickFacts();
schoolCatalog.addSchool(lorrainHansbury);
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams;
schoolCatalog.addSchool(alSmith);

const kennedyMiddle = new MiddleSchool('Kennedy Middle School', 320, 88, 'Fostering academic adn social growth during transitional years.');
schoolCatalog.addSchool(kennedyMiddle);