export default function selectBook(book){
    console.log('a book has been selected',book.title);
    return {
        type:'ADD_TEST',
        text:'tananana'
    };
}
