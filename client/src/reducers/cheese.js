import { FETCH_CHEESES_ERROR, FETCH_CHEESES_SUCCESS, FETCH_CHEESES_REQUEST,fetchCheesesRequest,
fetchCheesesError, fetchCheesesSuccess  } from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
}

const CheesesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CHEESES_ERROR':
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case 'FETCH_CHEESES_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_CHEESES_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        cheeses: action.cheeses
      }
    default: return state
  }
}

export default CheesesReducer