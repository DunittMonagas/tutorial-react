
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// setup vars
const firstBook = {
	img: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg', 
	title: 'I Love You to the Moon and Back', 
	author: 'Amelia Hepworth', 
};

const secondtBook = {
	img: 'https://images-na.ssl-images-amazon.com/images/I/510g8NLbpNL._SX384_BO1,204,203,200_.jpg', 
	title: 'Our Class is a Family', 
	author: 'Shannon Olsen', 
};

function BookList() {
	return (
		<section className='booklist'>
			<Book 
				img={firstBook.img} 
				title={firstBook.title} 
				author={firstBook.author} 
			>
				<p>
					Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, 
					consectetur, adipisci velit...
				</p>
			</Book>
			<Book 
				img={secondtBook.img} 
				title={secondtBook.title} 
				author={secondtBook.author} 
			/>
		</section>
	);
}

const Book = (props) => {
	const { img, title, author, children } = props;
	return (
		<article className='book'>
			<img src={img} alt='' />
			<h1>{title}</h1>
			<h4>{author}</h4>
			{children}
		</article>
	);
};


ReactDOM.render(<BookList />, document.getElementById('root'));
