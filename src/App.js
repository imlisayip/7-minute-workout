import React from 'react'
import { render } from "react-dom"
import { useTimer } from 'react-timer-hook';

import useSound from 'use-sound';
import female from './media/voiceover-female.ogg'

import Begin from './Begin';
import Step from './Step';
import Final from './Final';
import Frame from './Frame';

import { steps, sprite } from './data'

const App = () => {
    const [play, exposedData] = useSound(female, {
        interrupt: false,
        sprite: sprite

    })
    return (
        <div className="App">
            <button className="run" onClick={() => { play({ id: 'readyFor7MinuteIntro' }) }}>
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
