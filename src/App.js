import React, { useState, useRef } from 'react'
import { render } from "react-dom"
import useSound from 'use-sound';
import { useTimer } from 'react-timer-hook';

import Begin from './Begin';
import Step from './Step';
import Final from './Final';
import Frame from './Frame';

import female from './media/voiceover-female.ogg'
import { exercises, steps, sprite } from './data'

const TOTAL_EXERCISES = 12
const MILLISECOND = 1000
const EXERCISE_DURATION = 30
const REST_DURATION = 10

const App = () => {
    const [play, exposedData] = useSound(female, {
        interrupt: false,
        sprite: sprite
    })


    return (

        <div className="App">
            <div
                key="pause"
                className="frame"
                id="pause"
                role="button"
                tabIndex="0"
            >
                <h1>Pause</h1>
            </div >
            {steps.map((step, index) => {
                return (
                    // <Frame step={step} key={step.key + index} />
                    <div
                        key={step.key + index}
                        className="frame"
                        id={step.type}
                        role="button"
                        tabIndex="0"
                    >
                        <h1>{step.step}</h1>
                        <h2>{step.type}</h2>
                        {/* {props.children} */}
                        <button
                            // key={step.audio}
                            onClick={() => { play({ id: step.key }) }}
                        >
                            audioSprite
                        </button>
                        <button
                            // key={step.audio}
                            onClick={() => { play({ id: step.timer }) }}
                        >
                            counterSprite
                        </button>
                    </div >
                )
            })}
        </div >
    );

};

render(<App />, document.getElementById("root"));
