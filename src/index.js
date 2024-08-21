import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'

const BookList = () => {
    return (
        <section className='booklist'>
            <Book   
                title={firstBook.title} 
                author={firstBook.author} 
                image={firstBook.image} 
                imageAlt={firstBook.imageAlt} 
            />
            <Book   
                title={secondBook.title} 
                author={secondBook.author} 
                image={secondBook.image} 
                imageAlt={secondBook.imageAlt} 
            />
            <Book   
                title={thirdBook.title} 
                author={thirdBook.author} 
                image={thirdBook.image} 
                imageAlt={thirdBook.imageAlt} 
            />
        </section>
    );
};

const Book = ({title, author, image, imageAlt}) => {
    return (
    <article className='book'>
        <img src={image} alt={imageAlt}/>
        <h2>{title}</h2>
        <h4>{author}</h4>
    </article>
    );
};

const firstBook = {
    title: "Android Programming for Beginners (Third edition)",
    author: "John Horton",
    image: "./images/Android_programming.jpg",
    imageAlt: "Android Programming for Beginners"
};

const secondBook = {
    title: "Learning React: Modern Patterns for Developing React Apps (2nd Edition)",
    author: "Alex Banks, Eve Porcello",
    image: "./images/Learning_react.jpg",
    imageAlt: "Learning React: Modern Patterns for Developing React Apps"
};

const thirdBook = {
    title: "Head First Kotlin: A Brain-Friendly Guide (1st Edition)",
    author: "Dawn Griffiths, David Griffiths",
    image: "./images/HeadFirst_Kotlin.jpg",
    imageAlt: "Head First Kotlin: A Brain-Friendly Guide"
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

 