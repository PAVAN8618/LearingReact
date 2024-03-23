console.log("p");
const h1 = React.createElement("div", { id: "heading" }, "this is heading");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(h1);
// console.log(heading)

const parra = React.createElement(
  "div",
  { id: "first" },
  React.createElement("div", { id: "second" }, [
    React.createElement("span", { id: "third" }, "this is my id"),
    React.createElement("span", { id: "third" }, "this is my id"),
    React.createElement("span", { id: "third" }, "this is my id"),
  ])
);

const roo = ReactDOM.createRoot(document.getElementById("root"));
roo.render(parra);
