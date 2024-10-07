import React from "react";

const Book = (props) => {
    const {title, author, image, imageAlt, number} = props;
    // console.log(props);
    return (
        <article className='book'>
            <img src={image} alt={imageAlt}/>
            <h2>{title}</h2>
            <h4>{author}</h4>
            <span className='number'>{`# ${number + 1}`}</span>
        </article>
    );
};

export default Book;