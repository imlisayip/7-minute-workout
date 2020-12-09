const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
