import { createStore } from 'redux'
import mainReducer from './home/reducer'

const store = createStore(mainReducer)
export default store