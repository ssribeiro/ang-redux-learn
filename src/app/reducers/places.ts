import { createSelector } from 'reselect';
import { Place } from '../models/place';
import * as places from '../actions/places';

export interface State {
  places: Place[];
  editing_id: number;
};

export const initialState: State = {
  places: [{id:0,address:{address:'Rua Presidente Jair Messias Bolsonaro',number: 1,complement:'ano 2018'},
    location:{lat:-20.3498912,lng:-40.2833312,bounds:{north:-20.3497912, south:-20.3498912, east:-40.2832312, west:-40.2833312}}}],
  editing_id: null
};

export function reducer(state = initialState, action: places.Actions): State {
  switch (action.type) {
    case places.EDIT_PLACE: {
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
    }
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

export const getPlaces = (state: State) => state.places;
export const getEditingId = (state: State) => state.editing_id;

export const getEditing = createSelector(getPlaces, getEditingId, (places, editingId) => {
  return places.filter((pla)=>{return pla.id == editingId})[0];
});