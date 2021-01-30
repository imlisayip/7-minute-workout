import React from 'react'

export default function Clock({ timer }) {
    const twoDigit = (digit) => {
        return (digit < 10 ? "0" : "") + digit
    }

    return (
        <div className="clock">
            {/* <div>00:{firstDigit}{secondDigit}</div> */}
            <h3>00:{twoDigit(timer)}</h3>

        </div>
    );
};
