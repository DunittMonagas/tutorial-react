
import React from 'react';
import ReactDOM from 'react-dom';

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

/*function Greeting() {
	return (
		<div>
			<h1>Hello World!</h1>
		</div>
	);
}
*/

function Greeting() {
	return (
		<div>
			<h3>Hello People</h3>
			<ul>
				<li>
					<a href="#">Hello World!</a>
				</li>
				<img src='' alt='' />
				<input type='text' name='' id='' />
			</ul>
		</div>
	);
}


ReactDOM.render(<Greeting />, document.getElementById('root'));