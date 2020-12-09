import React from 'react'
import { render } from "react-dom"
import Pet from './Pet';

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Ozzy",
            animal: "Dog",
            breed: "Minature Austraialn Shephard",
        }),
        React.createElement(Pet, {
            name: "Doink",
            animal: "Cat",
            breed: "Ragdoll",
        }),
        React.createElement(Pet, {
            name: "Fluffy",
            animal: "Dog",
            breed: "Goldendoodle",
        }),
    ]);
};

render(React.createElement(App), document.getElementById("root"));
