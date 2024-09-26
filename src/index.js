import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'

const BookList = () => {
    const getBook = (id) => {
        const book = books.find(book => book.id === id);
        console.log(book);
    }
    return (
        <section className='booklist'>
            {books.map((book) => {
                return  <Book {...book} key={book.id} getBook={getBook}/>;
            })};
        </section>
    );
};

const Book = (props) => {
    const {title, author, image, imageAlt, getBook, id} = props;
    // console.log(props);
/*    const getSingleBook = () => {
        getBook(id);
    }*/
    return (
    <article className='book'>
        <img src={image} alt={imageAlt}/>
        <h2>{title}</h2>
        <h4>{author}</h4>
        <button onClick={() => getBook(id)}>Add to cart</button>
    </article>
    );
};

const books = [
     {
        title: "Android Programming for Beginners (Third edition)",
        author: "John Horton",
        image: "./images/Android_programming.jpg",
        imageAlt: "Android Programming for Beginners",
        id: 1
    },
    {
        title: "Learning React: Modern Patterns for Developing React Apps (2nd Edition)",
        author: "Alex Banks, Eve Porcello",
        image: "./images/Learning_react.jpg",
        imageAlt: "Learning React: Modern Patterns for Developing React Apps",
        id: 2
    },
    {
        title: "Head First Kotlin: A Brain-Friendly Guide (1st Edition)",
        author: "Dawn Griffiths, David Griffiths",
        image: "./images/HeadFirst_Kotlin.jpg",
        imageAlt: "Head First Kotlin: A Brain-Friendly Guide",
        id: 3
    }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

 