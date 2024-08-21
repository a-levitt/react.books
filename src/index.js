import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'

const BookList = () => {
    return (
        <section className='booklist'>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
};

const Book = () => {
    return (
    <article className='book'>
        <Image />
        <Title />
        <Author />
    </article>
    );
};

const Image = () => <img src='https://f.media-amazon.com/images/I/7156r9Yg5OL._SL1360_.jpg'
                         alt='Android Programming for Beginners'/>;
const Title = () => <h2>Android Programming for Beginners (Third edition)</h2>;
const Author = () => {
    return <h4>John Horton</h4>;
};




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

 