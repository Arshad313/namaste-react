const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I am a H1 tag"),
        React.createElement("h2", {}, "I am a H2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I am a H1 tag"),
        React.createElement("h2", {}, "I am a H2 tag")
    ])
]);
const heading = React.createElement("h1", {
    id: "heading"
}, "hello world from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
