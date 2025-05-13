// Hello World
const h1 = <h1>Hello world</h1>;

// JSX Elements
<p>Hello world</p>

// JSX Elements And Their Surroundings
const myArticle = <article></article>;

// Attributes In JSX
const p1 = <p id='large'>foo</p>;
const p2 = <p id='small'>bar</p>;

// Nested JSX
const myDiv = (
    <div>
        <h1>Hello world</h1>
    </div>
);

// JSX Outer Elements
const blog = (
    <div>
        <img src="pics/192940u73.jpg" />
        <h1>Welcome to Dan's Blog!</h1>
        <article>
            Wow I had the tastiest sandwich today. I <strong>literally</strong> almost
            freaked out.
        </article>
    </div>
);

// Rendering JSX
import React from 'react';
import { createRoot } from 'react-dom/client';

// Copy code here:
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>Hello world</h1>);

// Rendering JSX Explained
const container1 = document.getElementById('container');
const root1 = createRoot(container1);
root1.render(<h1>Hello world</h1>);

// Passing a Variable to render()
const container2 = document.getElementById('app');
const root2 = createRoot(container2);
// Write code here:
const myList = (
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
);

root2.render(myList);

// class vs className
const container3 = document.getElementById('app');
const root3 = createRoot(container3);
// Write code here:
const myDiv1 = <div className='big'>I AM A BIG DIV</div>;
root3.render(myDiv1);

// Self-Closing Tags
const profile = (
    <div>
        <h1>John Smith</h1>
        <img src="images/john.png" />
        <article>
            My name is John Smith.
            <br />
            I am a software developer.
            <br />
            I specialize in creating React applications.
        </article>
    </div>
);

// JavaScript In Your JSX In Your JavaScript
const container4 = document.getElementById('app');
const root4 = createRoot(container4);
// Write code here:
root4.render(<h1>2 + 3</h1>);

// Curly Braces in JSX
const container5 = document.getElementById('app');
const root5 = createRoot(container5);
// Write code here:
root5.render(<h1>{2 + 3}</h1>);

// 20 Digits of Pi in JSX
const container6 = document.getElementById('app');
const root6 = createRoot(container6);
// Write code here:
const math = <h1>2 + 3 = {2 + 3}</h1>;
root6.render(math);

// Variables in JSX
const container7 = document.getElementById('app');
const root7 = createRoot(container7);

const theBestString = 'This text was accessed through a javascript variable';

root7.render(<h1>{theBestString}</h1>);

// Variable Attributes in JSX
const container8 = document.getElementById('app');
const root8 = createRoot(container8);
const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = <img src={goose} />;
root8.render(gooseImg);

// Event Listeners in JSX
const container9 = document.getElementById('app');
const root9 = createRoot(container9);
function makeDoggy(e) {
    // Call this extremely useful function on an <img>.
    // The <img> will become a picture of a doggy.
    e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
    e.target.setAttribute('alt', 'doggy');
}

const kitty = (
    <img
        src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
        alt="kitty"
        onClick={makeDoggy} />
);

root9.render(kitty);

// JSX Conditionals: If Statements That Do Work
const container10 = document.getElementById('app');
const root10 = createRoot(container10);
function coinToss() {
    // This function will randomly return either 'heads' or 'tails'.
    return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
    kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
    doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === "heads") {
    img = <img src={pics.kitty} />;
} else {
    img = <img src={pics.doggy} />;
}
root.render(img);