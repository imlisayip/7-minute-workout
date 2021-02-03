import React from 'react'
import { render } from "react-dom"
import { useTimer } from 'react-timer-hook';

import Begin from './Begin';
import Step from './Step';
import Final from './Final';
import Frame from './Frame';

import { steps } from './data'

const App = () => {
    return (
        <div className="App">
            <button className="run" onClick={() => { }}>
                <ion-icon name="play"></ion-icon>
                                Start
                            </button>
            {steps.map((step, index) => {
                return (
                    <Frame step={step} key={index} />
                )
            })}
            <div
                key="final"
                className="frame"
                id="final"
                role="button"
                tabIndex="0"
            >
                <h1>Final</h1>
            </div >

        </div >
    );

};

render(<App />, document.getElementById("root"));
