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

// Nested Objects
let spaceship3 = {
    passengers: [{ name: 'Space Dog' }],
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach']
        }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        'back-up': {
            battery: "Lithium",
            terabytes: 50
        }
    }
};

let capFave = spaceship3.crew.captain['favorite foods'][0];
let firstPassenger = spaceship3.passengers[0]

// Pass By Reference
let spaceship4 = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth'
};

let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
};

let remotelyDisable = obj => {
    obj.disabled = true;
};

greenEnergy(spaceship4);
remotelyDisable(spaceship4);

console.log(spaceship4);

// Looping Through Objects
let spaceship5 = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() { console.log('You got this!') }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() { console.log('I agree, captain!') }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() { console.log(`Jets on!`) }
        },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() { console.log('The tank is full!') }
        }
    }
};

for (let crewMember in spaceship5.crew) {
    console.log(`${crewMember}: ${spaceship5.crew[crewMember].name}`);
}

for (let crewMember in spaceship5.crew) {
    console.log(`${spaceship5.crew[crewMember].name}: ${spaceship5.crew[crewMember].degree}`);
}