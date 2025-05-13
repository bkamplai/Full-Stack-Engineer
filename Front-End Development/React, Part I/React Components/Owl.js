import React from 'react';

const owl = {
    title: 'Excellent Owl',
    src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};

//Define function component here:
function Owl() {
    return (
        <div>
            <h1>{owl.title}</h1>
            <img src={owl.src} alt={owl.title} />
        </div>
    );
}

export default Owl;