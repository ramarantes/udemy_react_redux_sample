import React, {Component} from 'react';
import BookListItem from '../components/book-list-item'
import  {connect}  from 'react-redux';
import selectBook from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList(){
        
        return this.props.books.map((book) => {
            return (
                <BookListItem 
                    key={book.title} 
                    book={book}
                    onClick={() => this.props.selectBook(book)} />
            )
        })
    }

    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}
function mapStateToProps(state){
    //whatever is returned will show up as props inside of booklist
    return {
        books: state.books
    };  
}

//anything returned from thsi function will end up as props on the booklist container
function mapDispatchToProps(dispatch){
    //whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({selectBook:selectBook },dispatch);
}

//promoteBookList from  acomponent to a container - it needs to konw about this new dispatch method, make it available as prop.
export default connect(mapStateToProps,mapDispatchToProps)(BookList);