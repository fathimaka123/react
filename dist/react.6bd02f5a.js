const heading = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", null, "Hello world from react"),
        React.createElement("h2", {}, "This is h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", null, "Hello world from react"),
        React.createElement("h2", {}, "This is h2 tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=react.6bd02f5a.js.map
