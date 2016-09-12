import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";

class Counter extends Component {
    render() {
        return <h3>{this.props.count}</h3>
    }
}

Counter.propTypes = {
    count: PropTypes.number
}

class TextAreaCounter extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        };
    }

    render() {
        return  <div>
                    <textarea value={this.state.text} onChange={e => this._textChange(e)}></textarea>
                    <Counter count={this.state.text.length}></Counter>
                </div>
    }

    _textChange(ev) {
        this.setState({
            text: ev.target.value
        });
    }
}

TextAreaCounter.propTypes = {
    text: PropTypes.string
};

TextAreaCounter.defaultProps = {
    text: "Default"
};


class Greeting extends Component {
  
    render() {
        return <span>My name is {this.props.name}</span>
    }
}

Greeting.propTypes = {
    name: PropTypes.string
};

Greeting.defaultProps = {
    name: "Silly"
};

class Hello extends Component {
    render() {
        return <div>
                <Greeting>Hello</Greeting>
                <TextAreaCounter text="foo"></TextAreaCounter>
               </div>
    }
}

const app = document.getElementById("app");
ReactDOM.render(<Hello/>, app);