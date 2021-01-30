import React from 'react'
import Clock from './Clock';

export default function Step(props) {
    return (
        <div className="step" >
            {props.type === "exercise" ?
                (
                    <>
                        <h3>{props.step}</h3>
                        <div className="images animated-step"></div>
                    </>
                ) : (
                    <>
                        <h3>Rest for 10 Seconds</h3>
                        <p>Next up: {props.step}</p>
                    </>
                )
            }
            <Clock countdown={props.countdown} timer={props.timer} />
            <p>Click anywhere to {props.id === "pause" ? "resume" : "pause"} workout</p>
            <button className="stop" onClick={props.handleStop}>
                <ion-icon name="stop"></ion-icon>
                Stop Workout
            </button>
        </ div >
    );
};

