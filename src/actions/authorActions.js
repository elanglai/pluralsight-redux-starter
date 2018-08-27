import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors: authors};
}


export function loadAuthors() {
  return function(dispatch) {
    // getAllAuthors returns a promise.
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
