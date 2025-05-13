import React from 'react';

function SubmitButton() {
    function handleClick() {
        alert('Submission Successful.');
    }
    return <button onClick={handleClick}>Submit</button>;
}

export default SubmitButton;
