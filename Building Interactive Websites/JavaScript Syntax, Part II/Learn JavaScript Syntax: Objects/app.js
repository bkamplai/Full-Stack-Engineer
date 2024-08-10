// Creating Object Literals
let fastership = {
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
};

// Accessing Properties
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};

let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;

// Bracket Notation
let spaceship1 = {
    'Fuel Type': 'Turbo Fuel',
    'Active Mission': true,
    homePlanet: 'Earth',
    numCrew: 5
};

let propName = 'Active Mission';

let isActive = spaceship1['Active Mission'];
console.log(spaceship1[propName]);

// Property Assignment
let spaceship2 = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
    color: 'silver',
    'Secret Mission': 'Discover life outside of Earth.'
};

spaceship2.color = 'glorious gold';
spaceship2.numEngines = Math.floor(Math.random() * 11);
delete spaceship2['Secret Mission']

// Methods
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
    retreat() {
        console.log(retreatMessage);
    },
    takeOff() {
        console.log('Spim... Borp... Glix... Blastoff!');
    }
};

alienShip.retreat();
alienShip.takeOff();