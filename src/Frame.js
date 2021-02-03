import React from 'react'
import { useTimer } from 'react-timer-hook';


export default function Frame(props) {
    // console.log(props)
    return (
        <div
            key={props.key}
            className="frame"
            id={props.type}
            role="button"
            tabIndex="0"
        >
            <h1>{props.step}</h1>
            <h2>{props.type}</h2>
            {/* {props.children} */}

        </div >
    );
};

