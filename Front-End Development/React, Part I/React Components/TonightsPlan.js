import React from 'react';

const fiftyFifty = Math.random() < 0.5;

// New function component starts here:
function TonightsPlan() {
    if (fiftyFifty) {
        return <h1>Tonight I'm going out WOOO</h1>;
    } else {
        return <h1>Tonight I'm going to bed WOOO</h1>;
    }
}

export default TonightsPlan;