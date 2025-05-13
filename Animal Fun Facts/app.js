import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const title = '';
const background = <img className='background' alt='ocean' src='./images/ocean.jpg' />;
const images = [];

for (const animal in animals) {
    images.push(
        <img
            key={animal}
            className='animal'
            alt={animal}
            src={animals[animal].image}
            aria-label={animal}
            role='button'
            onClick={displayFact}
        />
    );
}

function displayFact(e) {
    const name = e.target.alt;
    const facts = animals[name].facts;
    const randomIndex = Math.floor(Math.random() * facts.length);
    const funFact = facts[randomIndex];
    document.getElementById('fact').innerHTML = funFact;
}

const showBackground = true;
const animalFacts = (
    <div>
        <h1>{title || 'Click an animal for a fun fact!'}</h1>
        {showBackground && background}
        <div className='animals'>{images}</div>
        <p id='fact'></p>
    </div>
);

root.render(animalFacts);