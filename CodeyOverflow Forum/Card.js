import React from "react";
import Header from "./Header.js";
import Body from "./Body.js";

function Card(props) {
    return (
        <div>
            <Header
                profileImg={props.commentObject.profileImg}
                username={props.commentObject.username}
            />
            <Body comment={props.commentObject.comment} />
        </div>
    );
}

export default Card;