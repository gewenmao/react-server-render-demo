import React, {Component} from 'react';

export default class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true}
    }

    render() {
        let display = this.state.showText ? 'block' : 'none';
        return (
            <div>
                <p style={{display: display}}>hello world!</p>
                <button onClick={() => {this.setState({showText:!this.state.showText})}}>click</button>
            </div>
        
        )
    }
}

