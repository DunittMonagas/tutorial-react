
import React from 'react';
import ReactDOM from 'react-dom';

// Nested Components, React Tools

function BookList() {
	return (
		<div>
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
		</div>
	);
}


const Book = () => {
	return (
		<article>
			<Image></Image>
			<Title />
			<Author />
		</article>
	);
};


const Image = () => (
	<img src='https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg' alt='' />
);
const Title = () => <h1>I Love You To The Moon and Back</h1>;
const Author = () => <h4>Amelia Hepworth</h4>;


ReactDOM.render(<BookList />, document.getElementById('root'));
