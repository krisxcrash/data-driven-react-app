import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Hello extends React.Component {
    render() {
        return <h3>Hello Webpack!</h3>;
    }
}


ReactDOM.render(<Hello />, document.getElementById('react'));