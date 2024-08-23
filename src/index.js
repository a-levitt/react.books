import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'

const BookList = () => {
    return (
        <section className='booklist'>
            {books.map((book) => {
                const {title, author, image, imageAlt} = book;
                return (
                    <Book image={image} title={title} author={author} imageAlt={imageAlt} />
                );
            })};
        </section>
    );
};

const Book = ({title, author, image, imageAlt, children}) => {
    return (
    <article className='book'>
        <img src={image} alt={imageAlt}/>
        <h2>{title}</h2>
        <h4>{author}</h4>
        {children}
        <button>Add to cart</button>
    </article>
    );
};
const books = [
 {
    title: "Android Programming for Beginners (Third edition)",
    author: "John Horton",
    image: "./images/Android_programming.jpg",
    imageAlt: "Android Programming for Beginners"
},
{
    title: "Learning React: Modern Patterns for Developing React Apps (2nd Edition)",
    author: "Alex Banks, Eve Porcello",
    image: "./images/Learning_react.jpg",
    imageAlt: "Learning React: Modern Patterns for Developing React Apps"
},
{
    title: "Head First Kotlin: A Brain-Friendly Guide (1st Edition)",
    author: "Dawn Griffiths, David Griffiths",
    image: "./images/HeadFirst_Kotlin.jpg",
    imageAlt: "Head First Kotlin: A Brain-Friendly Guide"
}
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

 