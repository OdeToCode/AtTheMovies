import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
    render() {
        return <h1>Hello</h1>
    }
}

const app = document.getElementById("app");
ReactDOM.render(<Hello/>, app);