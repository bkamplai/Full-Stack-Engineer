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