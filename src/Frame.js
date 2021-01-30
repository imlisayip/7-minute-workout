import React from 'react'

export default function Frame(props) {
    console.log(props)
    return (
        <div
            className="frame"
            id={props.id}
            onClick={props.onClick}
            onKeyDown={(e) => {
                console.log(e, e.key === ' ' ? props.onClick : null)
                return e.key === ' ' ? props.onClick : null
            }}
            role="button"
            tabIndex="0"
        >
            {props.children}
        </div >
    );
};

