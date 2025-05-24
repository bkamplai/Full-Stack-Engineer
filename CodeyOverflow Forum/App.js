import React from "react";
import { comments } from "./commentData,js";
import Card from "./Card.js";

function App() {
    return (
        <div>
            {comments.map((comment, index) => (
                <Card key={index} commentObject={comment} />
            ))}
        </div>
    );
}

export default App;