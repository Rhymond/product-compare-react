import { combineReducers } from 'redux'
import product from './productReducer'

const compareApp = combineReducers({
  product
});

export default compareApp