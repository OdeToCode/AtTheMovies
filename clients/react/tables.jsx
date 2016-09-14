import React, {Component} from "react";
import ReactDOM from "react-dom";

export class Excel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headers: props.headers,
            data: props.data,
            sortby: "title",
            descending: true
        }
    }

    _sort(e) {
        let column = e.target.innerText.toLowerCase();
        let descending = this.state.sortby == column && !this.state.descending;
        let data = this.state.data.slice();
        data.sort((a,b) => {
            return descending  
              ? (a[column] > b[column] ? 1 : -1)
              : (a[column] < b[column] ? 1 : -1)
        });
        this.setState({
            data: data,
            sortby: column, 
            descending: descending
        });
    }

    render() {

        let header =
            <tr>         
                 {this.state.headers.map((header, i) => {
                    let title = header;
                    if(this.state.sortby === header.toLowerCase()) {
                        title = header + (this.state.descending ? "\u2191" : "\u2193");
                    }
                    return <td onClick={e => this._sort(e)} key={i}>{header}</td>;
                 })}
            </tr>
 
        let dataCells = this.state.data.map(d => {
            return (
                <tr key={d.id}>
                    <td>{d.title}</td>
                    <td>{d.rating}</td>
                </tr>
            );
        });

        return (
            <table>
                <thead>                    
                    {header}                    
                </thead>
                <tbody>
                    {dataCells}
                </tbody>
            </table>
        );
    }
}

let headers = ["Title", "Rating"];
let data = [{id: 1, title: "Star Wars", rating: 4}, {id: 2, title:"A Star Trek", rating: 5}];


export class App extends Component {
    render() {
        return <div>
                <Excel headers={headers} data={data}></Excel> 
               </div>;
    }
}

ReactDOM.render(<App />, document.getElementById("app"));