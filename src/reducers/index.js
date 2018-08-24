import { combineReducers } from 'redux';
import  BooksReducer from './reducer_books';
import counterReducer from './reducer_counter';

const rootReducer = combineReducers({
  books: BooksReducer,
  counter: counterReducer
});

export default rootReducer;
