import React, { useState } from 'react'
import { useTimer } from 'react-timer-hook';
import useSound from 'use-sound';
import Clock from './Clock';

import female from './media/voiceover-female.ogg'
import { sprite } from './data'

export default function Frame(props) {
    const step = props.step
    const [play] = useSound(female, {
        interrupt: false,
        sprite: sprite
    })

    const [isPaused, setIsPaused] = useState(false)
    const [frame, setFrame] = useState(step.type)

    const handlePause = () => {
        if (isPaused) {
            // unpause
            setIsPaused(false)
            setFrame(step.type)
        } else {
            // pause
            setIsPaused(true)
            setFrame('pause')
        }
    }
    const handleAudio = () => {
        console.log(step.spriteTime)
        play({ id: step.key })
        const timer = setTimeout(() => {
            play({ id: step.timer })
        }, step.spriteTime)
        return () => clearTimeout(timer)
    }

    return (
        <div
            className="frame"
            id={frame}
            role="button"
            tabIndex="0"
            onClick={handlePause}
            onKeyDown={() => { }}
        >
            {isPaused ? (
                <>
                    <h1>currently</h1>
                    <h3>{step.step}</h3>
                    <p>Click anywhere to  resume workout</p>

                    <button className="stop" onClick={() => { }}>
                        <ion-icon name="stop"></ion-icon>
                                Stop
                </button>
                </>
            ) : (
                    <>
                        <h1>{step.step}</h1>
                        <h2>{step.type}</h2>
                        <button
                            onClick={handleAudio}
                        >
                            play sprite
            </button>
                        <Clock countdown={props.elapsedTime} timer={step.elapsedTime / 1000} />
                        <p>Click anywhere to pause workout</p>

                    </>
                )
            }


            {/* <p>Click anywhere to {isPaused ? "resume" : "pause"} workout</p> */}

        </div >
    );
};
