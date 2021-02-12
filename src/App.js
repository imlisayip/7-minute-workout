import React, { useState, useEffect } from 'react'
import { render } from "react-dom"
import { useTimer } from 'react-timer-hook';

import useSound from 'use-sound';
import loveGeneration from './media/LoveGeneration.mp3'
import femaleMp3 from './media/voiceover-female.mp3'

import Begin from './Begin';
import Step from './Step';
import Final from './Final';
import Frame from './Frame';

import { steps, sprite } from './data'

const App = () => {
    const [play, { pause }] = useSound(femaleMp3, {
        interrupt: false,
        sprite: sprite
    })
    const [playing, setPlaying] = useState(false)

    return (
        <div className="App">
            <div
                key="begin"
                className="frame"
                id="begin"
                role="button"
                tabIndex="0"
            >
                <button className="run" onClick={() => { play({ id: 'readyFor7MinuteIntro' }); setPlaying(true) }} >
                    <ion-icon name="play"></ion-icon>
                                Start
            </button>
                <button onClick={() => { playing && pause(); setPlaying(false); }}>Pause</button>
                <button onClick={() => { !playing && play(); setPlaying(true); }}>Resume</button>
            </div >
            {
                steps.map((step, index) => {
                    return (
                        <Frame step={step} key={index} />
                    )
                })
            }
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
