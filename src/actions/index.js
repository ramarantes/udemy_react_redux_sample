export default function(book){
    console.log('a book has been selected',book.title);
    return {
        type:'BOOK_SELECTED',
        payload: book
    };
}
