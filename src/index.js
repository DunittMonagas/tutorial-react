
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// setup vars
const books = [
	{
		img: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg', 
		title: 'I Love You to the Moon and Back', 
		author: 'Amelia Hepworth', 
	}, 
	{
		img: 'https://images-na.ssl-images-amazon.com/images/I/510g8NLbpNL._SX384_BO1,204,203,200_.jpg', 
		title: 'Our Class is a Family', 
		author: 'Shannon Olsen', 
	}, 
	{
		img: 'https://m.media-amazon.com/images/I/61-ytaG7QmL.jpg', 
		title: 'Why Nations Fail: The Origins of Power, Prosperity, and Poverty', 
		author: 'Daron Acemoglu', 
	}, 
];


function BookList() {
	return (
		<section className='booklist'>
			{books.map((book) => {
				return <Book book={book} />;
			})}
		</section>
	);
}

const Book = (props) => {
	const { img, title, author } = props.book;

	return (
		<article className='book'>
			<img src={img} alt='' />
			<h1>{title}</h1>
			<h4>{author}</h4>
		</article>
	);
};


ReactDOM.render(<BookList />, document.getElementById('root'));
