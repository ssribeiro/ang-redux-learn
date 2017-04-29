import { createSelector } from 'reselect';
import { Greet } from '../models/greet';
//import * as book from '../actions/book';
//import * as collection from '../actions/collection';


export interface State {
  ids: string[];
  entities: { [id: string]: Greet };
  defaultGreetId: string | null;
};

/*export const initialState: State = {
  ids: [],
  entities: {},
  defaultGreetId: null,
};*/

export const initialState: State = {
  ids: ['1'],
  entities: {'1':{hi:'olá mundoi'}},
  defaultGreetId: '1',
};

export function reducer(state = initialState/*, action: book.Actions | collection.Actions*/): State {
  /*switch (action.type) {
    case book.SEARCH_COMPLETE:
    case collection.LOAD_SUCCESS: {
      const books = action.payload;
      const newBooks = books.filter(book => !state.entities[book.id]);

      const newBookIds = newBooks.map(book => book.id);
      const newBookEntities = newBooks.reduce((entities: { [id: string]: Book }, book: Book) => {
        return Object.assign(entities, {
          [book.id]: book
        });
      }, {});

      return {
        ids: [ ...state.ids, ...newBookIds ],
        entities: Object.assign({}, state.entities, newBookEntities),
        selectedBookId: state.selectedBookId
      };
    }

    case book.LOAD: {
      const book = action.payload;

      if (state.ids.indexOf(book.id) > -1) {
        return state;
      }

      return {
        ids: [ ...state.ids, book.id ],
        entities: Object.assign({}, state.entities, {
          [book.id]: book
        }),
        selectedBookId: state.selectedBookId
      };
    }

    case book.SELECT: {
      return {
        ids: state.ids,
        entities: state.entities,
        selectedBookId: action.payload
      };
    }

    default: {
      return state;
    }
  }*/
  return state;
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getDefaultId = (state: State) => state.defaultGreetId;

export const getDefault = createSelector(getEntities, getDefaultId, (entities, selectedId) => {
  return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
