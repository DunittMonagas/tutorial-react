
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// setup vars
const books = [
	{
		id: 1, 
		img: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg', 
		title: 'I Love You to the Moon and Back', 
		author: 'Amelia Hepworth', 
	}, 
	{
		id: 2, 
		img: 'https://images-na.ssl-images-amazon.com/images/I/510g8NLbpNL._SX384_BO1,204,203,200_.jpg', 
		title: 'Our Class is a Family', 
		author: 'Shannon Olsen', 
	}, 
	{
		id: 3, 
		img: 'https://m.media-amazon.com/images/I/61-ytaG7QmL.jpg', 
		title: 'Why Nations Fail: The Origins of Power, Prosperity, and Poverty', 
		author: 'Daron Acemoglu', 
	}, 
];


function BookList() {
	return (
		<section className='booklist'>
			{books.map((book) => {
				return <Book key={book.id} {...book} />;
			})}
		</section>
	);
}

const Book = ({ img, title, author }) => {
	// attribute, eventHandler
	// onClick, onMouseOver
	const clickHandler = (e) => {
		console.log(e);
		console.log(e.target);
		alert('Hello World!');
	};

	const complexExample = (author) => {
		console.log(author);
	};

	return (
		<article className='book' onMouseOver={() => {
			console.log(title);
		}}>
			<img src={img} alt='' />
			<h1 onClick={() => console.log(title)}>{title}</h1>
			<h4>{author}</h4>
			<button type='button' onClick={clickHandler}>
				Reference example
			</button>
			<button type='button' onClick={() => complexExample(author)}>
				More complex ecample
			</button>
		</article>
	);
};


ReactDOM.render(<BookList />, document.getElementById('root'));
