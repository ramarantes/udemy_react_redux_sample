import { combineReducers } from 'redux';
import  BooksReducer from './reducer_books';
import counterReducer from './reducer_counter';
import ActiveBook from './reducer_ative_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  counter: counterReducer,
  ActiveBook: ActiveBook
});

export default rootReducer;
