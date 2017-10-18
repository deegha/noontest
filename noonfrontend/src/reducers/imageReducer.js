import * as types from '../actions/actionTypes'; 
import initaiState from './initialState' 

export default function imageReducer (state = initaiState, action) {
    switch(action.type) {
      case types.START_FETCHING_IMAGES :
        return {...state, fetchingData : true}
      case types.GET_IMAGE_SUCCESS:
        return {...state, images : action.payload ,fetchingData : false}
      case types.GET_IMAGE_ERROR:
        return {...state, fetchingData : false}
      case types.ADD_FAV_SUCCESS:
        return state
      case types.ADD_FAV_ERROR:
        return state
      default: 
        return state;
  }
}