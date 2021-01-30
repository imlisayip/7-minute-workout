import React, { useState, useRef } from 'react'
import { render } from "react-dom"
import useSound from 'use-sound';
import Begin from './Begin';
import Step from './Step';
import Final from './Final';
import Frame from './Frame';

import female from './media/voiceover-female.ogg'

const EXERCISE_LENGTH = 12

const App = () => {
    const exercises = [
        {
            audio: 'jumpingJacks',
            exercise: 'Jumping jacks',
            duration: 4000,
            sprite: 10000,
        },
        {
            audio: 'wallSit',
            exercise: 'Wall sit',
            duration: 4000,
            sprite: 59000,
        },
        {
            audio: 'pushUp',
            exercise: 'Push up',
            duration: 2000,
            sprite: 63000,
        },
        {
            audio: 'abCrunch',
            exercise: 'Abdominal crunch',
            duration: 3000,
            sprite: 66000,
        },
        {
            audio: 'stepUpToChair',
            exercise: 'Step-up onto chair',
            duration: 4000,
            sprite: 69000,
        },
        {
            audio: 'squat',
            exercise: 'Squat',
            duration: 3000,
            sprite: 73000,
        },
        {
            audio: 'tricepDipOnChair',
            exercise: 'Triceps dip on chair',
            duration: 3000,
            sprite: 76000,
        },
        {
            audio: 'plank',
            exercise: 'Plank',
            duration: 4000,
            sprite: 79000,
        },
        {
            audio: 'highKnee',
            exercise: 'High knees running in place',
            duration: 5000,
            sprite: 83000,
        },
        {
            audio: 'lunge',
            exercise: 'Lunge',
            duration: 2000,
            sprite: 88000,
        },
        {
            audio: 'pushUpRotation',
            exercise: 'Push ups with rotation',
            duration: 5000,
            sprite: 90000,
        },
        {
            audio: 'sidePlank',
            exercise: 'Side plank',
            duration: 3000,
            sprite: 95000,
        },
    ]
    const [play] = useSound(female, {
        sprite: {
            readyFor7MinuteIntro: [0, 10000],
            timer: [14000, 30000],
            rest: [45000, 14000],
            done: [98000, 6000],
            highFive: [104000, 1000],

            jumpingJacks: [exercises[0].sprite, exercises[0].duration],
            wallSit: [exercises[1].sprite, exercises[1].duration],
            pushUp: [exercises[2].sprite, exercises[2].duration],
            abCrunch: [exercises[3].sprite, exercises[3].duration],
            stepUpToChair: [exercises[4].sprite, exercises[4].duration],
            squat: [exercises[5].sprite, exercises[5].duration],
            tricepDipOnChair: [exercises[6].sprite, exercises[6].duration],
            plank: [exercises[7].sprite, exercises[7].duration],
            highKnee: [exercises[8].sprite, exercises[8].duration],
            lunge: [exercises[9].sprite, exercises[9].duration],
            pushUpRotation: [exercises[10].sprite, exercises[10].duration],
            sidePlank: [exercises[11].sprite, exercises[11].duration],
        }
    })

    const [index, setIndex] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [timer, setTimer] = useState(1)
    const countRef = useRef(null)
    // let exercise = 
    // let rest =  // TODO: calcualte tiem 
    // const [audioFile, { pause }] = useSound(yosteArc)

    const handleReadyFor7MinuteIntro = () => {
        // play({ id: 'readyFor7MinuteIntro' })
        // const timer = setTimeout(() => handleStart(), 10000)
        // return () => clearTimeout(timer)
        handleStart()
    }
    const handleStart = () => {
        setIsActive(true)
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }
    const handlePause = () => {
        clearInterval(countRef.current)
        setIsPaused(false)
    }
    const handleResume = () => {
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }
    const handleReset = () => {
        setIndex(index + 1)
        setTimer(0)
    }
    const handleStop = () => {
        console.log('handle stop')
        handlePause()
        setIsActive(false)
        setIndex(0)
        setTimer(0)
    }
    const handleFinal = () => {
        clearInterval(countRef.current)
    }

    const getFrame = () => {
        if (EXERCISE_LENGTH > index) {
            //  TODO: update to appropriate times
            if (timer <= 10) {
                return (
                    <Frame
                        id={isPaused ? "rest" : "pause"}
                        onClick={isPaused ? handlePause : handleResume}
                    >
                        <Step
                            handleStop={handleStop}
                            id={isPaused ? "rest" : "pause"}
                            key={index}
                            step={exercises[index].exercise}
                            timer={10 - timer}
                            type="rest"
                        />
                    </Frame>
                )
            } else if (timer <= 41) {
                return (
                    <Frame
                        id={isPaused ? "exercise" : "pause"}
                        onClick={isPaused ? handlePause : handleResume}
                    >
                        <Step
                            handleStop={handleStop}
                            id={isPaused ? "exercise" : "pause"}
                            key={index}
                            step={exercises[index].exercise}
                            timer={41 - timer}
                            type="exercise"
                        />
                    </Frame>
                )
            }
            else {
                handleReset()
            }
        } else {
            handleFinal()
            return <Frame id="final" onClick={() => { }}><Final /></Frame>
        }
    }

    return (

        <div className="App">
            <div className='stopwatch-card'>
                <div>timer {timer}</div>
                {
                    !isActive && !isPaused && EXERCISE_LENGTH > index ?
                        (<Frame onClick={() => { }}>
                            <Begin />
                            <button className="run" onClick={handleReadyFor7MinuteIntro}>
                                <ion-icon name="play"></ion-icon>
                                Start
                            </button>
                        </Frame>)
                        : (getFrame())
                }
                {/* {exercises.map(exercise => {
                    return (
                        <button
                            key={exercise.audio}
                            onClick={() => { play({ id: exercise.audio }) }}
                        >
                            {exercise.exercise}
                        </button>
                    )
                })} */}

            </div>
        </div >
    );

};

render(<App />, document.getElementById("root"));
