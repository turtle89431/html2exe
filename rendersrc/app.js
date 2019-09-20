import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class App extends Component {
	render() {
		return <div onClick={() => window.ss('source', 'server')}>build app here - {this.props.data.source}</div>;
	}
}
ReactDOM.render(<App data={{ source: 'react' }} />, document.querySelector('#app'));
window.report = data => {
	let d = JSON.parse(data);
	ReactDOM.render(<App data={d} />, document.querySelector('#app'));
};
window.ss = (key, obj = {}) => {
	document.querySelector('#err').innerHTML = 'clicked';
	let value = typeof obj == 'string' ? obj : JSON.stringify(obj);
	window.muban.setstate(key, value);
};
