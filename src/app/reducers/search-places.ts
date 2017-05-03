import { createSelector } from 'reselect';
//import { Place } from '../models/place';
import * as search_places from '../actions/places';

export interface State {
  results: any[];
  searching: boolean;
};

export const initialState: State = {
  results: [],
  searching: false
};

export function reducer(state = initialState, action: search_places.Actions): State {
  switch (action.type) {
    /*case places.EDIT_PLACE: {
      const place_id = action.payload;
      return {
        places: [ ...state.places ],
        editing_id: place_id
      };
    }
    case places.STOP_EDITING_PLACE: {
      return {
        places: [ ...state.places ],
        editing_id: null
      };
    }
    case places.PLACE_CHANGE: {
      const placeChanged = action.payload;
      const newPlaces = new Array<Place>();
      for (let pla of state.places) {
        if(pla.id!=placeChanged.id)
          newPlaces.push(pla);
        else
          newPlaces.push(placeChanged);
      }
      return {
        places: newPlaces,
        editing_id: state.editing_id
      };
    }
    case places.REMOVE_PLACE: {
      const placeOutId = action.payload;
      const newPlaces = new Array<Place>();
      for (let pla of state.places) {
        if(pla.id!=placeOutId)
          newPlaces.push(pla);
      }
      return {
        places: newPlaces,
        editing_id: state.editing_id
      };
    }
    case places.ADD_PLACE: {
      const newAddress = {
        address: '',
        number: 0,
        complement: ''
      };
      const newPlace = {
        id: Date.now(),
        address: newAddress,
        location:null,
      };
      const newPlaces = [...state.places, newPlace];
      return {
        places: newPlaces,
        editing_id: newPlace.id
      };
    }*/
    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getSearchResults = (state: State) => state.results;
export const getSearchingStatus = (state: State) => state.searching;