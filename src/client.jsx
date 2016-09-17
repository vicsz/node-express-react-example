var React = require('react');
var ReactDOM = require('react-dom');
var Select = require('react-select');


var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

function logChange(val) {
    console.log("Selected: " + val);
}

ReactDOM.render(
	<Select
	    name="form-field-name"
	    value="one"
	    options={options}
	    onChange={logChange}
	/>, 
	document.getElementById('app')
);
