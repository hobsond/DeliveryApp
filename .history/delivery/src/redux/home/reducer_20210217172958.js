const initial = {
    next : false
}
import {Next} from './cakeType'
const mainReducer = (state = initial, action) => {
    switch (action.type) {
        case Next: return {
            ...state,
            next:!state.next
        }
        default: return state
    }
    
}

export default mainReducer

