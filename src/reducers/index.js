import { combineReducers } from 'redux'
import product from './product_reducer'

const compareApp = combineReducers({
  product
})

export default compareApp