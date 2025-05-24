import React from "react";

function Button(props) {
    const { text = "Default Text of Big Button" } = props;
    return <button>{text}</button>;
}

export default Button;
