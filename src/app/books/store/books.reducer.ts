import { createReducer, on } from '@ngrx/store';
import { Books } from './books';
import { booksFetchAPISuccess, saveNewBookAPISucess } from './books.action';
 
export const initialState: ReadonlyArray<Books> = [];
 
export const bookReducer = createReducer(
  initialState,
  on(booksFetchAPISuccess, (state, { allBooks }) => {
    return allBooks;
  }),
  on(saveNewBookAPISucess, (state, { newBook }) => {
    let newState = [...state];
    newState.unshift(newBook);
    return newState;
  })
);