// The this Keyword
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    }
};

console.log(robot.provideInfo());  // Prints: I am 1E78V2 and my current energy level is 100.

// Arrow Functions and this
const robot2 = {
    energyLevel: 100,
    checkEnergy() {
        console.log(`Energy is currently at ${this.energyLevel}%.`);
    }
};

robot2.checkEnergy();  // Prints: Energy is currently at 100%.

// Privacy
const robot3 = {
    _energyLevel: 100,
    recharge() {
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};

robot3._energyLevel = 'high';
robot3.recharge();  // Prints: Recharged! Energy is currently at high30%.

// Getters
const robot4 = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
        if (typeof this._energyLevel === 'number') {
            return `My current energy level is ${this._energyLevel}`;
        } else {
            return 'System malfunction: cannot retrieve energy level';
        }
    }
};

console.log(robot4.energyLevel);  // Prints: My current energy level is 100