import React from 'react';

export default (book) => {
    return <li className="list-group-item" onClick={book.onClick}>{book.book.title}</li>;
};

//  export default BookListItem;